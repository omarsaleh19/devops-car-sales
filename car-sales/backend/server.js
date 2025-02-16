const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// חיבור למסד הנתונים
mongoose.connect("mongodb://127.0.0.1:27017/car_sales", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// סכמת רכב (Model)
const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number
});

const Car = mongoose.model("Car", carSchema);

// **נתיב API שמחזיר את המכוניות ממסד הנתונים**
app.get("/api/cars", async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cars", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
