var exp=require("express")
var app=exp()
const port=process.env.PORT || 6789     // must important
app.get("/",(req,res)=>{
    res.send("deploy node appliation successful")
})
app.listen(port,()=>{
    console.log(`Port listening at ${port}`)
})