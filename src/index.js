import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4040

connectDB();
app.get("/",(req, res)=>{
    res.send("hello");
})

app.listen(PORT, ()=>{
    console.log("Server running at PORT number ", PORT);
})