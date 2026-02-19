var buf=Buffer.alloc(25)
var len=buf.write("welcome")
console.log("total length:",len);
console.log(buf)
console.log(buf.toString())

//==================================
var buf1=Buffer.alloc(25,"a")
console.log(buf1)
console.log(buf1.toString())
//=================================
var buf2=Buffer.from("sabari")
console.log(buf2)
console.log(buf2.toString())
buf2.write("krr",3);
console.log(buf2)
console.log(buf2.toString())
//================================
for(x of buf2.values())
{
    console.log(x,String.fromCharCode(x))
}   