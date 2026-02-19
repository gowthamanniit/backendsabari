var fs=require("fs")
var data=fs.readFileSync("temp.txt")
console.log("data:",data.toString())
console.log("program end")