import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITALMANAGEMENTSYSTEMCLOUD"
    }).then(()=>{
       console.log("Connected to database!");
    }).catch((err)=>{
        console.log(`some error occured in connecting datbases: ${err}`);
    })
}