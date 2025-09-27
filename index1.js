/*
var exp=require("express")
var app=exp()
const port=process.env.PORT     // must important
app.get("/",(req,res)=>{
    res.send("deploy node appliation successful")
})



app.listen(port,()=>{
    console.log(`Port listening at ${port}`)
})
    */
var http=require("http")
var url=require("url")
var mcloud=require("./mongocloud1")
const port=process.env.PORT || 9009


http.createServer(async (req,res)=>{
console.log("data from react")
res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET');
res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

console.log(req.url)
var myurl=url.parse(req.url,true)
console.log(myurl)
var jsonfilter=myurl.query
console.log(jsonfilter)
var final=JSON.parse(JSON.stringify(jsonfilter))
console.log(final)


res.writeHead(200,{'content-type':'application/json'})
var dataset=await mcloud.insfun(final)
console.log("mongodb to node:",dataset)
res.write(JSON.parse(JSON.stringify(dataset)))
res.end()
})


app.listen(port,()=>{
    console.log(`Port listening at ${port}`)
})

