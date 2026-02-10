const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/project_02")
    }catch(err){
        console.err("mongo db failes", error);
        process.exit(1);
    }
}
module.exports=connectDB;