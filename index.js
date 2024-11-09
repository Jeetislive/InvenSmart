import express from "express";
import dotenv from "dotenv";
import route from "./routes/index.route.js";
import { errorHandler } from "./error/ErrorHandler.js";

dotenv.config(
    { path: "./.env" }
);
const app = express();
app.use(express.json({ extended: true}));
const PORT = process.env.PORT || 8000;
app.use("/api/",route);
// Error handling middleware
app.use(errorHandler);
// Mock Data
app.get("/",(req,res) => {
    res.send("Smart Inventory Management Project")
});
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
