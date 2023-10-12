const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const secretkey = "secretkey"

app.get("/",(req,res)=>{
    res.json({
        message:"Sample applicationa"
    })
})

app.post("/login",(req,res)=>{
    const user ={
        id:1,
        name:"Ankitha"
    }
    jwt.sign({user},secretkey,{expiresIn:'300s'},(err,token)=>{
        res.json({
            token
        })
    })
})

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authData) => {
        if (err) {
            res.send({ result: "invalid token" });
        } else {
            res.json({ result: "Profile Accessed", authData });
        }
    });
});


function verifyToken(req, res, next) {
    const bearerHeader = req.headers["Authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[10]; // Use index 1 to get the token
        req.token = token;
        next();
    } else {
        res.send({
            result: 'Token is not valid'
        });
    }
}


app.listen(5000,()=>{
    console.log("App is running in 5000 port")
})