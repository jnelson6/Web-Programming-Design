/*NEED TO DOUBLE CHECK THIS IS CORRECT AND CHANGE TO BE MY OWN

*/

const express = require('express');
let app = express();
let configRoutes = require('./routes');


configRoutes(app);

app.listen(3000, ()=> {
    console.log("Server is started");
    console.log("Your routes will be running on http://localhost:3000");
});
