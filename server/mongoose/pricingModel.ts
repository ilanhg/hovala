import { Schema, model } from "mongoose";

const pricingSchema = new Schema({
    items:{
        type: String,
    required: true,
    },
    prices:{
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