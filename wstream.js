var fs=require("fs")

var writeStream=fs.createWriteStream("d:/output123.txt")

var mydata="This is sabari i am from karur ghfhggdgfd55345354@#%$#$%%"
writeStream.write(mydata,'utf-8')
writeStream.end();

writeStream.on("finish",()=>{
    console.log("successfully written")
})

writeStream.on("error",(err)=>{
    console.log("Error Reason:",err.toString())
})
console.log("program ended")