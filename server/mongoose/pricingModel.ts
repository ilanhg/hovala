import { Schema, model } from "mongoose";

const pricingSchema = new Schema({
    item:{
        type: String,
    required: true,
    },
    price:{
        type:Number,
        required:true
    },
    elevator:{
        type : Boolean ,
        default:false
    },
    floors:{
        type: Number,
        required: true
    },
    distance:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required:true
    }
})

export const UserModel = model("pricingModel", pricingSchema);