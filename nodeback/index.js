const express = require('express')
const cors = require('cors')
const collection = require("./mongo")
const app = express();

app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors({
    
}))



app.post("/login",async(req,res)=>{
   const {email,password} = req.body

   try {
     const check = await collection.findOne({email:email})

     if(check){
        res.json("exist")
     }else{
        res.json("not exist")
     }
   } catch (error) {
    res.json("not exists")
     console.log(error);
   }
})

const PORT = 5002
app.post("/",async(req,res)=>{
    const {name,email,number,password,repassword} = req.body

    const data = {
        name:name,
        email:email,
        number:number,
        password:password,
        repassword:repassword
    }
 
    try {
      const check = await collection.findOne({email:email})
 
      if(check){
         res.json("exist")
      }else{
         res.json("not exist")
         await collection.insertMany([data])
      }
    } catch (error) {
     res.json("not exists")
      console.log(error);
    }
 })

app.get("/",(req,res)=>{
    console.log("about page");
    res.json({result:'about is running'})
})
app.listen(PORT,()=>{
  console.log('application is running at port');
})