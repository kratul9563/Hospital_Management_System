import mongoose from "mongoose";
import validator from "validator";

const  messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name must Contain at least 3 Characters ! "]
    },
     lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name must Contain at least 3 Characters ! "]
    },
     email:{
        type: String,
        required: true,
       validate:[validator.isEmail,"Please provide a valid email"]
    },
     phone:{
        type: String,
        required: true,
        minLength: [11, "Phone Number Must contain 11 Digits !"],
        maxLength: [11, "Phone Number Must contain 11 Digits !"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must contain atleast 11 Digits !"]
    },
});

export const  Message = mongoose.model("Message", messageSchema);