var http=require("http")
console.log("http module ok")
http.createServer((req,res)=>{
    
    res.end("<h1>This is simple node js output</h1>");
}).listen(8019)
console.log("server is running at 8019 port number.......")