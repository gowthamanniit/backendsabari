const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
try{
    client.connect()
    const ip={rno:6}
    const dataset=client.db("sabari").collection("student").deleteMany(ip)
    dataset.then((result)=>{
        console.log(result)
    })
}
catch{
    console.log("Error")
}