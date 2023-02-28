const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json()); // runs express package
app.use(express.urlencoded({ extend: true })); // converts HTML to URL format
app.use(express.static("public"));

app.use("./api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`I am running on http://localhost:${PORT}`)
})