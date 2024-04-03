import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const  userSchema = new mongoose.Schema({
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
    nic:{
        type: String,
        required: true,
        minLength: [5, "NIC must contain atleast 13 Digits !"],
        maxLength: [13, "NIC must contain atleast 13 Digits !"]
    },
    dob:{
       type: Date,
        required: [true, "DOB is required !"],  
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male","Female"],
    },
    password:{
        type: String,
        required: true,
        minLength: [5, "Password Must contain atleast 5 Digits !"],
        select: false
    },
    role:{
        type: String,
        required: true,
        enum: ["Patient","Doctor","Admin"],
    },
    doctorDepartment:{
        type: String,
    },
    docAvatar:{
        public_id: String,
        url:String
     }
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const  User = mongoose.model("User", userSchema);