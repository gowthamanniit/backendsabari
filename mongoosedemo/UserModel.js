import mongoose from "mongoose";

//schema --> structure based 

const userSchema=new mongoose.Schema({
    rno:{
        type:Number,
        required:true,
    },
    sname:{
        type:String,
        required:true,
        uppercase:true,
    },
    mark:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    insertedAt:{
        type:Date,
        default:()=>Date.now()
    }
})

export default mongoose.model("mycol1",userSchema)