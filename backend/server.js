const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//connecting to database
connectDatabase();

dotenv.config({ path: "backend/config/config.env" })
app.listen(process.env.PORT, () => {
    console.log(`Process is working on http://localhost:${process.env.PORT}`);
})