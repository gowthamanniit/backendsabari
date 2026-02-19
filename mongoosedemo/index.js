import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/sdb").then(()=>{
    console.log("connection success")
}).catch((err)=>{
    console.log("error:",err)
})
import User from './UserModel.js' //import 
//const User=require("./UserModel") // import

const mydata=new User({rno:1,sname:"dinesh",mark:10})
mydata.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})