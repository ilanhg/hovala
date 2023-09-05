<<<<<<< Updated upstream
import { UserModel } from './mongoose/userSchema';
import express  from "express";

=======
import { UserModel } from "./mongoose/userSchema";
import express from "express";
<<<<<<< Updated upstream
import { authenticatToken, generateAccessToken,VALID_TOKENS,REFRESH_TOKENS } from "./guards/authentication";
import { log } from "console";
>>>>>>> Stashed changes
=======
import {
  authenticatToken,
  generateAccessToken,
  VALID_TOKENS,
  REFRESH_TOKENS,
} from "./guards/authentication";
import axios from "axios";
>>>>>>> Stashed changes

require("dotenv").config();
const app = express();
const cors = require("cors");
<<<<<<< Updated upstream
const mongoose=require ("mongoose");
=======
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
<<<<<<< Updated upstream
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN)
>>>>>>> Stashed changes
const port = process.env.PORT || 8000;
let Otp=444455;
app.use(cors());
app.use(express.json());
<<<<<<< Updated upstream
=======
=======
const SerpApi = require("google-search-results-nodejs");

const port = process.env.PORT || 8000;

app.use(
  cors({
    credentials: true,
    origin: "*",
    maxAge: 2592000,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
>>>>>>> Stashed changes

const unless = function (pathsToIgnoreMiddleware: string[], middleware: any) {
  return function (req: any, res: any, next: any) {
    if (pathsToIgnoreMiddleware.includes(req.path)) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};
<<<<<<< Updated upstream
app.use(unless(["/login", "/token","/register"], authenticatToken));
>>>>>>> Stashed changes
=======
app.use(unless(["/login", "/token","/api/homepage"], authenticatToken));
>>>>>>> Stashed changes

export default async function connectDB(){
  mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('Connected to mongoDB')
  }).catch((err:any)=>{
      console.log(err);
  })
}
connectDB();

<<<<<<< Updated upstream
<<<<<<< Updated upstream
app.get('/homepage', (req:any, res:any) => {
=======
app.get("/homepage", (req: any, res: any) => {
=======
app.post("/api/homepage", async (req: any, res: any) => {
>>>>>>> Stashed changes
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
    const mobileNo = req.body.mobileNo;

    const user = await UserModel.findOne({
<<<<<<< Updated upstream
      email: email,
     
=======
      email,
>>>>>>> Stashed changes
    });
    if (!user) {
      return res.status(401).send("Bad username & password combination");
    } else {
      const passCompare = await bcrypt.compare(password, user?.password);
      console.log(password);
      if (passCompare) {
        const payload = { user: email };
        const accessToken = generateAccessToken(payload);
        const refreshToken = jwt.sign(
          payload,
          process.env.REFRESH_TOKEN_SECRET
        );
        console.log(accessToken);
        console.log(refreshToken);
<<<<<<< Updated upstream
        res.json({ accessToken: accessToken, refreshToken: refreshToken });
        // res.status(200).send('Login succesfully!')
     
    } 
       client.messages.create({
        body:`your OTP verification is ${Otp}`,
        massagingServiceSid: "VA969b83971aca1158a290f8ac905f05a7",
        from:
        to:`+972525420268`,
      }).then(()=>res.status(200).sent({msg:"Massage Sent"}))
    .done()
//     client.verify.v2
// .services("VA969b83971aca1158a290f8ac905f05a7")
//   .verifications.create({ to: "+972525420268", channel: "sms" })
//   .then((verification:any) => console.log(verification.status))
//   .then(() => {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (Otp:any) => {
//       client.verify.v2
//         .services(process.env.TWILIO_SERVICE_SID)
//         .verificationChecks.create({ to: "+972525420268", code: Otp })
//         .then((verification_check:any) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
  });

  
     
=======
        return res
          .status(200)
          .json({ accessToken: accessToken, refreshToken: refreshToken });
      }
      return res.status(401).send("Unauthorized for this action!");
>>>>>>> Stashed changes
    }
  } catch {
    return res.status(500).send({ message: "server error" });
  }
});

app.post("login/verify",async(req,res)=>{
  try{
    const OTP =req.body;
    if(OTP !=Otp){
      return res.status(400).send({ message: "Incorrect Otp" })
    }
    res.status(200);
  }
  catch{
    return  res.status(500).send({message:'Server Error'})
  }
})

app.post("/token", (req: any, res: any) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err: any, payload: any) => {
        if (!err) {
          const email = payload.user;
          if (REFRESH_TOKENS[email] == refreshToken) {
            const accessToken = generateAccessToken(payload);
            return res.status(200).json({ accessToken });
          }
        }
      }
    );
  }
  return res.status(401).send("Unauthorized for this action!");
});

app.post("/register", async (req: any, res: any) => {
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  try{
    res.status(200).send('welcome');
  }catch{
    return res.status(500).send({message:'server error'})
  }
  res.send('Express + TypeScript Server');
});

app.post('/login', async (req:any, res:any) => {
  const email = req.body.email;
  const password = req.body.password;

  // Uncomment this if this is your first login - for creating your username in the db
  // const actualUser = new UserModel({
  //   email: email,
  //   password,
  // });
  // await actualUser.save();

  const user = await UserModel.findOne({
    email: email,
    password,
  });

  if (!user) {
    res.status(401).send('Bad username & password combination');
  } else {
    res.status(200).send('Login succesfully!');
  }
});
app.post('/register', async (req:any, res:any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
<<<<<<< Updated upstream
  const password = req.body.password;

    const actualUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
      
=======
  // const mobileNo = req.body.mobileNo;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const actualUser = new UserModel({
    firstName,
    lastName,
    email,
  
    password: hashedPassword,
>>>>>>> Stashed changes
  });
  await actualUser.save();

 try{
    res.status(200).send('register succesfully!');
=======
  try {
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
>>>>>>> Stashed changes
  } catch {
    res.status(409).send('The user exists, Enter with another email');
  }
});
<<<<<<< Updated upstream




=======
app.post("/logout", (req: any, res) => {
  try {
    const email = req.body.email;
    delete VALID_TOKENS[email];
    delete REFRESH_TOKENS[email];
    res.status(200);
  } catch {
    res.status(500);
  }
});
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});