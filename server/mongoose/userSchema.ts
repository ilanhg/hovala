import { Schema, model } from "mongoose";

<<<<<<< Updated upstream
const UserSchema= new Schema({
        id:{type:String},
        firstName:{type:String},
        lastName:{type:String},
        email:{type:String},
        password:{type:String},
        // address:{type:String}
})
=======
const UserSchema = new Schema({
  id: {
    type: String,
<<<<<<< Updated upstream
    // required: true,
    // trim: true,
=======
   
>>>>>>> Stashed changes
  },
  firstName: {
    type: String,
    // required: true,
    // trim: true,
  },
  lastName: {
    type: String,
    // required: true,
    // trim: true,
  },
  email: {
    type: String,
    // required: true,
    // trim: true,
    // unique: true,
  },
  mobileNo: {
        type: String,
        // required: true,
        // trim: true,
        // unique: true,
      },
  password: {
    type: String,
    // required: true,
    // trim: true,
  },

});
>>>>>>> Stashed changes

export const UserModel = model("userModle", UserSchema);


