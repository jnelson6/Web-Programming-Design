const { Router } = require("express");

const home = Router();

home.get("/", async (req, res) => {
  res.render("home", { layout: "index" });
});

module.exports = home;
