import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  mobileNo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
        type: String,
        required: true,
    },

});


export const UserModel = model("userModle", UserSchema);
