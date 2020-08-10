const {findById, createNewNote} = require('../../lib/notes');
const notes = require('../../db/notes.json');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log("Results: "+JSON.stringify(results));
    res.json(results.notes_db);
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
   // console.log("---- Hit route '/api/notes' on the server! Here the request body: ", req.body);
    
    req.body.id = notes['notes_db'].length + 1;
    const newNotes = createNewNote(req.body, notes);
    res.json(newNotes);
});

// //Delete note - NOT WORKING
// router.delete('/notes/:id', (req, res) => {
//     fs.readFile('../../db/notes.json', 'utf8', function (error, data) {
//         let noteId = req.params.id;
//         let noteData = JSON.parse(data);
//         noteData = noteData.filter(function(notes_db) {
//             if (noteId != notes_db.id) {
//                 return true;
//             }
//             else {
//                 return false
//             };
//         });
//     });
// })
module.exports = router;