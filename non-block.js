var fs=require("fs")
fs.readFile("temp.txt",(err,data)=>{
    if(err) throw "file not found"
    console.log(data.toString())
})
console.log("program end")