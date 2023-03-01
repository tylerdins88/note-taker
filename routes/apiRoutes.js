const apiRouter = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");
const util = require("util");

const readFromDatabase = util.promisify(fs.readFile);

const writeToDatabase = (database, data) => {
    fs.writeFile(database, JSON.stringify(data, null, 1), (err) => {
        err ? console.error(err) : console.info(`\n Data written to ${database}`)
    });
};

apiRouter.get("/api/notes", (req, res) => {
    readFromDatabase("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

apiRouter.get("/api/notes/:id", (req, res) => {
    readFromDatabase("./db/db.json").then((data) => {
        let dbNotes = JSON.parse(data);
        res.json(dbNotes[req.params.id]);
    });
});

apiRouter.post("/api/notes", (req, res) => {

    let { title, text } = req.body;
    title = title.trim();
    text = text.trim();

    if (title && text) {
        const note = {
            id: uniqid,
            title,
            text,
        };

        readFromDatabase("./db/db.json").then((data) => {
            let dbNotes = JSON.parse(data);
            dbNotes.push(note);
            writeToDatabase("./db/db.json", dbNotes);
        });

        const response = {
            status: "Complete",
            body: note,
        }

        res.json(response);
    } else {
        res.json("Error posting note")
    }
})