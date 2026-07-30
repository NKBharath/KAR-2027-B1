const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const studentroutes = require("./Routes/StudentRoutes")
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/student", studentroutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
