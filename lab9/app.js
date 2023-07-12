/******
* filename: app.js
* author: Julia Nelson
*********/

const express = require('express');
const app = express();
const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

// Static Files (.css / .js )
app.use('/static', express.static(__dirname + '/static'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


configRoutes(app);
app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});



