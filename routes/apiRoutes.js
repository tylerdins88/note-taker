// Node library packages required for application. 
const apiRouter = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const util = require("util");

// Promise version of fs.readFile
const readFromDatabase = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToDatabase = (database, data) => {
    fs.writeFile(database, JSON.stringify(data, null, 1), (err) => {
        err ? console.error(err) : console.info(`\n Data written to ${database}`)
    });
};

// GET Route for retrieving all of the notes. 
apiRouter.get("/api/notes", (req, res) => {
    readFromDatabase("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

apiRouter.get("/api/notes/:id", (req, res) => {
    readFromDatabase("./db/db.json").then((data) => {
        let dbNotes = JSON.parse(data);
        res.json(dbNotes[req.params.id]);
    });
});

// Post Route for submitting a note to database. 
apiRouter.post("/api/notes", (req, res) => {

    let { title, text } = req.body;
    title = title.trim();
    text = text.trim();

    if (title && text) {
        const note = {
            id: uuidv4(),
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

// Delete Route for deleting a note. 
apiRouter.delete("/api/notes/:id", (req, res) =>
    readFromDatabase("./db/db.json").then((data) => {
        let dbNotes = JSON.parse(data);

        dbNotes = dbNotes.filter((note) => {
            return note.id !== req.params.id;
        })

        writeToDatabase("./db/db.json", dbNotes);

        res.json(JSON.parse(data));
    })
);

// Export api routes. 
module.exports = apiRouter;