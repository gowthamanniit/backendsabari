// import header
var events=require("events")

// create object to eventemitter
var eventemitter=new events.EventEmitter()

// bind event or called
eventemitter.on("sabarievent",()=>{
    console.log("sabari event called")
})

console.log("program end")
//fire event or calling
eventemitter.emit("sabarievent")
eventemitter.emit("sabarievent")