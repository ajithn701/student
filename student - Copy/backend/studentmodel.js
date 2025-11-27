const mongoose=require("mongoose")

const schema=mongoose.Schema({
    name:String,
    age:Number,
    department:String,
    password:String
})
const studentmodel=mongoose.model("student",schema)

module.exports=studentmodel