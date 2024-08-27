const express=require('express');
const app=express();
const db=require('./db')
const cors=require('cors');
app.use(cors());
// db();

app.listen(5000,(req,res)=>{
    console.log("listening at port 5000");
})