//initiate express
const express = require('express');
const app = express();
//declare port
const PORT = process.env.PORT || 3001;
//declare variables for routes
const htmlRoutes = require('./routes/htmlRoutes');
const notes = require('./db/db.json');

//middleware to connect stylesheets
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

//get routes
app.use('/', htmlRoutes);


//keep at end of file
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});