const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
try{
    client.connect()
    var olddata={mark:{$gte:90}}
    var newdata={$set:{result:"pass"}}
    const ds=client.db("sabari").collection("student").updateMany(olddata,newdata)
    ds.then((result)=>{
        console.log(result)
    })
}
catch{
    console.log("error")
}