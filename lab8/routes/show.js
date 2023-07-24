const { Router } = require("express");
const axios = require("axios");

const show = Router();

const getShowDetails = async (showId) => {
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
  let summary = "NA";
  if (data && data.summary) {
    summary = data.summary.replace(/(<([^>]+)>)/gi, "");   //Removing HTML tags
  }
  return data ? { ...data, summary } : null;
};

show.get("/show/:id([0-9]+)", async (req, res) => {
  const show = await getShowDetails(req.params.id);
  if (show) {
    res.render("show", { layout: "index", show });
  } else {
    res.render("error", { layout: "index", error: "Show not found" });
  }
});

module.exports = show;


