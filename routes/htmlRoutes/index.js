const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/', (req, res) => {
    res.send(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;