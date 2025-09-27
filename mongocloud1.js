const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.uri

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function insfun(myinput) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    var data=await client.db("gdatabase").collection("edetails").insertOne(myinput)
    console.log(" You successfully inserted to MongoDB!");
    return JSON.stringify(data) // goto node server

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);
module.exports={vvfun}  //anywhere to access