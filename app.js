const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db");


app.use(express.json({ extended: false, limit: "10kb" }));

// Connect Database
connectDB();
// app.get("/", (req, res) => {
//    res.send("api running") 
// });

app.use(express.static(path.join(__dirname, './public')));
app.use(cors());
app.use('/', require('./app/routes/index'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});