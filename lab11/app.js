const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//Sets our app to use the handlebars engine
app.use(express.static(path.join(__dirname, "/public/")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => console.log(`App listening to port ${port}`));
