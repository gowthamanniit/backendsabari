const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
try{
    client.connect()
    const olddata={rno:5}
    const newdata={$set:{mark:299}}
    const dset=client.db("sabari").collection("student").updateOne(olddata,newdata)
    dset.then((res)=>{
        console.log(res)
    })
}
catch{
    console.log("error")
}