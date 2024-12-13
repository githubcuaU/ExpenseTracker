
// const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbConfig");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

connectDB();

// let corsOptions = 
// {
//     origin: "http://localhost:3000/"
// };
// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/expenses", require("./routes/expenseRoutes"));

// 404 route
app.all("*", (req, res) => 
{
    res.status(404);
    
    if (req.accepts("text/html")) 
    {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } 
    else if (req.accepts("application/json")) 
    {
        res.json({ error: "404 Not Found" });
    }
});


mongoose.connection.once("open", () => 
{
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>  
    {
        console.log(`Server is listening on port ${PORT}`);
    });
});