const path = requir('path');
const fs = require('fs');

const createNote = (body, notes) => {
    const note = body;

    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
};

const findById = (id, notes) => {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

module.exports = {
    createNote,
    findById,
};