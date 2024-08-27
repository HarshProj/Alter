const mongoose=require('mongoose');
require('dotenv').config()
const uri=process.env.URI;
const connecttodb=()=>{

    mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports=connecttodb;