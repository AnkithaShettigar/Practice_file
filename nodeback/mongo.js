const mongoose = require("mongoose")
const DB = "mongodb+srv://Ankitha:ankitha@cluster0.zxuiba0.mongodb.net/loginpage?retryWrites=true&w=majority"
mongoose.connect(DB,{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log("mongoDB connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    repassword:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("register",newSchema)
module.exports = collection