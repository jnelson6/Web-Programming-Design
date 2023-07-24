const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//Loads the handlebars module
const { engine } = require("express-handlebars");

//Import routes
const searchshowroutes = require("./routes/searchshows");
const showroutes = require("./routes/show");
const homeroutes = require("./routes/home");

//Enable body parsing
app.use(express.urlencoded({ extended: true }));

//Sets our app to use the handlebars engine
app.use(express.static(path.join(__dirname, "/public/")))
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

app.use(searchshowroutes);
app.use(showroutes);
app.use(homeroutes);

app.get("*", (req, res) => {
  res.render("error", { layout: "index", error: 400 });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
