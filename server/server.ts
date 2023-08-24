import { UserModel } from "./mongoose/userSchema";
import express from "express";
import { authenticatToken, generateAccessToken,VALID_TOKENS,REFRESH_TOKENS } from "./guards/authentication";

require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 8000;

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
app.use(unless(["/login", "/token"], authenticatToken));

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

    const user = await UserModel.findOne({
      email: email,
    });
    bcrypt.compare(password, user?.password);
    console.log(password);
    if (!user) {
      res.status(401).send("Bad username & password combination");
    } else {
      const payload = email;
      const accessToken = generateAccessToken(payload);
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
      console.log(accessToken);
      console.log(refreshToken);
      res.json({ accessToken: accessToken, refreshToken: refreshToken });
      res.status(200);
    }
  } catch {
    return res.status(500).send({ message: "server error" });
  }
});
app.post("/token", (req: any, res: any) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err: any, email: any) => {
        if (!err) {
          if (REFRESH_TOKENS[username] == refreshToken) {
            const accessToken = generateAccessToken(email);
            return res.status(200).json({ accessToken });
          }
        }
      }
    );
  }
});

app.post("/register", async (req: any, res: any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const actualUser = new UserModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
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
