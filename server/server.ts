import express  from "express";

require("dotenv").config();
const app = express();
const mongoose=require ("mongoose");
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());

export default async function connectDB(){
  mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('Connected to mongoDB')
  }).catch((err:any)=>{
      console.log(err);
  })
}
connectDB();

app.get('/homepage', (req:any, res:any) => {
  try{
    res.status(200).send('welcome');
  }catch{
    return res.status(500).send({message:'server error'})
  }
  res.send('Express + TypeScript Server');
});



app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});