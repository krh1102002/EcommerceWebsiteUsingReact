const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaughtException`);
    process.exit(1);
})

//connecting to database
connectDatabase();

dotenv.config({ path: "backend/config/config.env" })
const server=app.listen(process.env.PORT, () => {
    console.log(`Process is working on http://localhost:${process.env.PORT}`);
})
// console.log(youtube);

// Unhandled Promise rejection 
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Process Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});