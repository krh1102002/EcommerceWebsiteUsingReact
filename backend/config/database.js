const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:"backend/config/config.env"});

const connectDatabase=()=>{
    console.log(process.env.DB_URI);
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`mongodb connected to the server ${data.connection.host}`)
    })

}
module.exports=connectDatabase;