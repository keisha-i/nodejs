const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from index.js
app.use('/', indexRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server running on port ${port}');
});