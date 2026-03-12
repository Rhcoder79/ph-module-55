const express = require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app= express();
const port= process.env.PORT || 3000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
//LEJccoWrTAZZuhYH
//smartdbUser
const uri = "mongodb+srv://smartdbUser:LEJccoWrTAZZuhYH@cluster0.sumux0b.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
app.get('/',(req,res)=>{
    res.send('smart server is running')
})
async function run() {
 try{
 await client.connect();
 const db=client.db('smart_db')
 const productsCollection=db.collection('products');
const bidsCollection=db.collection('bids');

 app.get('/products',async(req,res)=>{
  //  const projectFields={title:1,price_min:1,price_max:1,image:1}
   // const cursor=productsCollection.find().sort({price_min:-1}).skip(4).limit(2).project(projectFields);
   console.log(req.query);
   const email=req.query.email;
   const query={}
   if(email){
    query.email=email;
   }
   const cursor=productsCollection.find(query);
    const result=await cursor.toArray();
    res.send(result)
 });
 app.get('/products/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id: new ObjectId(id)}
    const result=await productsCollection.findOne(query);
    res.send(result);

 })
 app.post('/products',async(req,res)=>{
   const newProduct=req.body;
   const result= await productsCollection.insertOne(newProduct);
   res.send(result);
 })

app.patch('/products/:id',async(req,res)=>{
    const id=req.params.id;
    const updatedProduct=req.body;
    const query={_id: new ObjectId(id)}
    const update={
      //  $set:updatedProduct
      $set:{
        name:updatedProduct.name,
        price:updatedProduct.price,
      }
    }
    const result=await productsCollection.updateOne(query,update)
    res.send(result)
})

 app.delete('/products/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id:new ObjectId(id)}
    const result=await productsCollection.deleteOne(query);
    res.send(result);
 })
 app.get('/bids',async(req,res)=>{
    const email=req.query.email;
    const query={};
    if(email){
        query.bidder_email=email;
    }
    const cursor=bidsCollection.find(query);
    const result=await cursor.toArray();
    res.send(result);

 })
 app.post('/bids',async(req,res)=>{
    const newBid=req.body;
    const result=await bidsCollection.insertOne(newBid)
    res.send(result);
 })
  await client.db("admin").command({ ping: 1 });
      console.log("Pinged your hello deployment. You successfully connected to MongoDB!");
 }  
 finally{

 } 
}
run().catch(console.dir)
app.listen(port,()=>{
    console.log(`smart server is running on port: ${port}`)
})

// client.connect()
// .then(()=>{
//     app.listen(port,()=>{
//         console.log(`smart server rh is running on port: ${port}`)
//     })
// })
// .catch(console.dir)