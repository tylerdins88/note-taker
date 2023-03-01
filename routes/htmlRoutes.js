const express = require("express");
const htmlRoutes = express();
const path = require("path");

htmlRoutes.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

htmlRoutes.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
);

htmlRoutes.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = htmlRoutes;