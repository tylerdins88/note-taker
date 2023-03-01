// Node library packages required for application. 
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Port for the local server. 
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json()); // Runs express package.
app.use(express.urlencoded({ extended: true })); // Converts HTML to URL format.
app.use(express.static("public"));

// Routes for the application. 
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// Function to run application. 
app.listen(PORT, () => {
    console.log(`I am running on http://localhost:${PORT}`)
})