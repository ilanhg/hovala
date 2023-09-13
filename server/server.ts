import { UserModel } from "./mongoose/userSchema";
import express from "express";
import { authenticatToken, generateAccessToken,VALID_TOKENS,REFRESH_TOKENS } from "./guards/authentication";
import nodemailer from 'nodemailer'
import axios from "axios";
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 8000;

function sendEmail({ recipient_email, OTP }:any) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'hovalaclick@gmail.com',
        pass: 'hovalaclick123',
      },
    });

    const mail_configs = {
      from: 'hovalaclick@gmail.com',
      to: recipient_email,
      subject: "KODING 101 PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error:any, info:any) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}


app.use(cors());
app.use(express.json());
const unless = function (pathsToIgnoreMiddleware: string[], middleware: any) {
  return function (req: any, res: any, next: any) {
    if (pathsToIgnoreMiddleware.includes(req.path)) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};
app.use(unless(["/login", "/token","/register","/forgotPass","/api/homepage"], authenticatToken));

export default async function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((err: any) => {
      console.log(err);
    });
}
connectDB();

app.get("/homepage", (req: any, res: any) => {
  try {
    res.status(200).send("welcome");
  } catch {
    return res.status(500).send({ message: "server error" });
  }
  res.send("Express + TypeScript Server");
});
app.post("/api/homepage", async (req: any, res: any) => {

  try {
    const { search } = req.body;
    console.log(search);
    const {data} = await axios.get(`http://serpapi.com/locations.json?q=${search}&limit=-5`);
    return res.send(data);
  } catch {
    return res.status(500).send({ message: "server error" });
  }
  // res.send("Express + TypeScript Server");
});

app.post("/login", async (req: any, res: any) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
      email: email,
    });
    if (!user) {
      res.status(401).send("Bad username & password combination");
    } else {
      const passCompare = await bcrypt.compare(password, user?.password);
      console.log(password);
      if(passCompare){
        const payload = {user: email};
        const accessToken = generateAccessToken(payload);
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
        console.log(accessToken);
        console.log(refreshToken);
        res.json({ accessToken: accessToken, refreshToken: refreshToken });
        res.status(200);
      }
      return res.status(401).send('Unauthorized for this action!');
     
    }
  } catch {
    return res.status(500).send({ message: "server error" });
  }
});
app.post("/token", (req: any, res: any) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken) {
    jwt.verify( refreshToken,process.env.REFRESH_TOKEN_SECRET,(err: any, payload: any) => {
        if (!err) {
          const email= payload.user;
          if (REFRESH_TOKENS[email] == refreshToken) {
            const accessToken = generateAccessToken(payload);
            return res.status(200).json({ accessToken });
          }
        }
      });
  }
  return res.status(401).send('Unauthorized for this action!');
});

app.post("/register", async (req: any, res: any) => {
  try{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const mobileNo = req.body.mobileNo;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const actualUser = new UserModel({
    firstName,
    lastName,
    email,
    mobileNo,
    status: "PENDING",
    password: hashedPassword,
  });
  await actualUser.save();
    res.status(200).send("register succesfully!");
  } catch {
    res.status(409).send("The user exists, Enter with another email");
  }
});

app.post('/forgotPass',async(req:any,res:any)=>{
  const email = req.body;
  const user = await UserModel.findOne({
    email: email,
  });
  if (!user) {
    res.status(401).send("wrong email");
  } else {
    sendEmail(email)
    .then((response:any) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));

  }

})

app.post('/logout',(req:any,res)=>{
try{
  const email = req.body.email;
  delete VALID_TOKENS[email];
  delete REFRESH_TOKENS[email];
  res.status(200);
}
catch{
  res.status(500)
}
})

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});
