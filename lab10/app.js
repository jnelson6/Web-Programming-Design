require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3000;
const { checkUser, createUser } = require("./data/user");
const logger = require("./middleware/logger");

//Loads the handlebars module
const { engine } = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));

//Setup express session
app.use(
  session({
    name: "AuthCookie",
    secret: "Adsaftlg34sf34256dce3",
    resave: false,
    saveUninitialized: true,
  })
);

//Bind logging middleware before routes mount
app.use(logger);

//Sets our app to use the handlebars engine
app.use(express.static(path.join(__dirname, "/public/")));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

//Routes

app.get("/private", (req, res) => {
  if (!req.session.isAuthenticated) {
    res.redirect("/login");
  } else {
    res.render("private", { layout: "index", user: req.session.username });
  }
});

//Logout
app.get("/logout", (req, res) => {
  req.session.isAuthenticated = false;
  req.session.username = "";
  res.redirect("/login");
});

//Login page route
app.get("/login", (req, res) => {
  res.render("login", {
    layout: "index",
  });
});

//Process login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await checkUser(username, password);

  if (user) {
    req.session.isAuthenticated = true;
    req.session.username = username;
    res.redirect("/private");
  } else {
    res.render("login", {
      layout: "index",
      loginError: "Either username or password is invalid",
    });
  }
});

//Signup page route
app.get("/signup", (req, res) => {
  res.render("signup", { layout: "index" });
});

//Process signup route
app.post("/signup",async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await createUser(username, password);
    if (user.userInserted) {
      res.redirect("/login");
    } else {
      res.render("signup", {
        layout: "index",
        signupError: "Either username or password is invalid",
      });
    }
  } catch (error) {
    res.render("signup", {
      layout: "index",
      signupError: error,
    });
  }
});

//Default route
app.get("/", (req, res) => {
  if (req.session.isAuthenticated) {
    res.redirect("/private");
  } else {
    res.redirect("/signup");
  }
});

app.listen(port, () => console.log(`App listening to port ${port}`));
