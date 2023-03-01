const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json()); // runs express package
app.use(express.urlencoded({ extend: true })); // converts HTML to URL format
app.use(express.static("public"));

app.use("./api", apiRoutes);
app.use("/", htmlRoutes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/index.html"))
// })

app.listen(PORT, () => {
    console.log(`I am running on http://localhost:${PORT}`)
})