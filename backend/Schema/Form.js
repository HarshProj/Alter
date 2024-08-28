const mongoose=require('mongoose')
const {Schema}=mongoose;
const FormSchema=new Schema({
    formname:{
        type:String
    },
    values:[{
        label:String,
    error:String,
    option1:String,
    option2:String,
    option3:String,
    index:Number
    }],
    date:{
        type:String
    },
        time:{
            type:String
        },
        url:{
            type:String
        }
})
const Form=mongoose.model('Form',FormSchema);
module.exports=Form;