const express=require('express');
const app=express();
require('dotenv').config()
// const router=express.Router();
app.use(express.json());
const port=process.env.PORT
const Form=require('./Schema/Form');
// console.log(process.env)
const db=require('./db')
const cors=require('cors');
app.use(cors()); 
db();
app.post("/api/createform",async(req,res)=>{
    try {
        const {formname,values,date,time,url}=req.body;
        const form=await Form.create({
            values,
            formname,
            date,
            time,
            url
        })
        const data={
            form:{
                id:form.id
            }
        }
        console.log(data,form);
        res.status(200).send({data,msg:"success"});
    } catch (error) {
        res.status(500).send({err:error.message});
    }
   
})
app.get('/api/getforms',async(req,res)=>{
    try {
        const data= await Form.find({});
        console.log(data);
        res.status(200).send({data})
    } catch (error) {
        res.status(500).send({err:error.message});   
    }
})
app.listen(port,(req,res)=>{
    console.log(`listening at port ${port}`);
})