const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Running server on ${PORT}`);
})