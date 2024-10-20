const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const usersRoute = require("./routes/userRoutes");
const drugRoute = require("./routes/drugRouter");
const PORT = 3000;
app = express();    
dotenv.config();  


// Connnect to Databse
connectDB();

app.use(express.json());
app.use("/users",usersRoute);
app.use("/drugs",drugRoute)
app.get("",(req,res)=>{
    res.json({message:"Hellow  World"});
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port no http://localhost:${process.env.PORT} `)
})