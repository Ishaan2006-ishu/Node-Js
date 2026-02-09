const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect("")
    }catch(err){
        console.err("mongo db failes", error);
        process.exit(1);
    }
}
module.exports=connectDB;