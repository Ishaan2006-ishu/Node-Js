const app=require("./app");
const connectDB=require("./config/db");

const PORT=8000;
connectDB();

app.listen(PORT,()=>{
    console.log(`server start`);
});