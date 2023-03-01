// Node library packages required for application. 
const express = require("express");
const htmlRoutes = express();
const path = require("path");

// Get Routes for the splash page and note page
htmlRoutes.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

htmlRoutes.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
);

htmlRoutes.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

// Export html routes. 
module.exports = htmlRoutes;