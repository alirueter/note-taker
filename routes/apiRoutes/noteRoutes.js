const {findById, createNewNote} = require('../../lib/notes');
const notes = require('../../db/notes.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    }
    else {
        res.send(404);
    }
});

router.post('/notes', (req,res) => {
    console.log("---- Hit route '/api/notes' on the server! Here the request body: ", req.body);
    
    req.body.id = notes.length + 1;
    const newNotes = createNewNote(req.body, notes);
    res.json(newNotes);
    res.send("Hit route '/api/notes' on the server! ");
});

module.exports = router;