const express = require('express');
const cors = require('cors');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('hello world')
});  


module.exports = app;