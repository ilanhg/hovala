import { Schema, model } from "mongoose";

const UserSchema= new Schema({
        id:{type:String},
        firstName:{type:String},
        lastName:{type:String},
        email:{type:String},
        password:{type:String},
        // address:{type:String}
})

export const UserModel = model("userModle", UserSchema);


