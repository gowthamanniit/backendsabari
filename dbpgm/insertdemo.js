const {MongoClient}=require("mongodb")
path="mongodb://127.0.0.1:27017/"
const client=new MongoClient(path)

try{
    client.connect()
    console.log("connection success")
    var ip={sno:"karur",name:100,m:88}
    const dataset=client.db("sabari").collection("student").insertOne(ip)
    console.log("inserted success")
    console.log(dataset)
    dataset.then((result)=>{
        console.log(result)
    })
}
catch{
    console.log("connection error")
}