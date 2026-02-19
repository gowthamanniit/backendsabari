const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
try{
    client.connect()
    const ds=client.db("sabari").collection("student").find({}).toArray()
    ds.then((res)=>{
        
            console.log(res)
        
    })
}
catch{
    console.log("error")
}