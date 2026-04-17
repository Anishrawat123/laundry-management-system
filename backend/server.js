const express = require('express');
const connectDB = require('./config/db.js');
connectDB();
const cors = require('cors');
const orderRoutes = require("./routes/orderRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",orderRoutes);

app.get("/",(req,res)=>{
    res.send("API is Running.....");
})

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});

