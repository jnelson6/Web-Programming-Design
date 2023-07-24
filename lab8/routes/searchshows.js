const { Router } = require("express");
const axios = require("axios");

const searchshow = Router();


//TV Amaza API call to search shows with search term
const searchShows = async (searchTerm) => {
  const { data } = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  return data.slice(0, 5);     //Limiting to 5
};

searchshow.get("/searchshows", async (req, res) => {
  const { showSearchTerm } = req.body;
  if (!showSearchTerm) {
    res.redirect("/");
    return;
  }
  const searchResults = await searchShows(showSearchTerm);

  res.render("showsearch", { layout: "index", searchResults });
});

searchshow.post("/searchshows", async (req, res) => {
  const { showSearchTerm } = req.body;
  if (!showSearchTerm) {
    res.redirect("/");
    return;
  }
  const searchResults = await searchShows(showSearchTerm);

  res.render("showsearch", { layout: "index", searchResults });
});

module.exports = searchshow;
