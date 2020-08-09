const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNote, findById} = require('../../lib/notes');

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
    console.log(req.body);

    req.body.id = notes.length + 1;
    const newNotes = createNote(req.body, notes);
    res.json(newNotes);

});

module.exports = router;