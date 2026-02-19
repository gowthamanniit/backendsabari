const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
try{
    client.connect()
    const inp={rno:41}
    const ds=client.db("sabari").collection("student").findOne(inp)
    ds.then((res)=>{
        
        if (res===null)
        {
            console.log("no recored found ")
        }
        else{
            console.log(res)
        }
    })
}
catch{
    console.log("error")
}