import { UserModel } from "./mongoose/userSchema";
import express from "express";

require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8000;
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

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

app.post("/login", async (req: any, res: any) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    // const accessToken = generateAccessToken(email);
    // const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECERT);
    // console.log(accessToken);
    // res.json({ accessToken: accessToken, refreshToken: refreshToken });

    // function generateAccessToken(email: any) {
    //   return jwt.sign(
    //     email,
    //     process.env.ACCESS_TOKEN_SECERT /*,{expiresIn:"15s"}*/
    //   );
    // }
    const user = await UserModel.findOne({
      email: email,
      
    });
    bcrypt.compare(password,user?.password)
    console.log(password)
    if (!user) {
      res.status(401).send("Bad username & password combination");
    } else {
      res.status(200).send("Login succesfully!");
    }
  } catch {
    return res.status(500).send({ message: "server error" });
  }
});
app.post("/register", async (req: any, res: any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password,10);

  const actualUser = new UserModel({
    firstName,
    lastName,
    email,
    password:hashedPassword,
  });
  await actualUser.save();

  try {
    res.status(200).send("register succesfully!");
  } catch {
    res.status(409).send("The user exists, Enter with another email");
  }
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});
