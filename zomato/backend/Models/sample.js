const mongoose=require('mongoose')
const {Schema}=mongoose;

const Sample=new Schema({
    categoryName:{
        type:String,
    },
    name:{
        type:String,
    },
    img:{
        type:String,
    },
    description:{
        type:String,
    },
   
})

module.exports=mongoose.model('sample',Sample)