let searchResults = [];
let currentShow = null;

//DOM Elements
let searchInput = null;
let showsList = null;
let searchForm = null;
let show = null;
let backToShows = null;

//Initialize on page load complete
$(document).ready(() => {
  //Find DOM elements
  searchInput = $("input#search_term");
  backToShows = $("#homeLink");
  backToShows.hide();
  showsList = $("#showList");
  showsList.hide();
  searchForm = $("#searchForm");
  show = $("#show");
  show.hide();

  //Add submit event listener to form
  searchForm.submit((event) => {
    searchShows(event);
  });
});

//Handle form submit
const searchShows = (event) => {
  event.preventDefault();
  event.stopPropagation();

  //Get the input value
  const searchTerm = searchInput.val();

  //If invalid search term, show error and don't continue
  if (!searchTerm || searchTerm.trim().length < 1) {
    alert("Please enter a keyword");
    return;
  }

  //Make Ajax request to tvmaze API
  $.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, function (data) {
    //Update shows list
    searchResults = data;

    //Update shows list UI
    renderShowsList();
  });
};

//Handle show list item click
const viewShow = (event, showId) => {
  event.preventDefault();
  event.stopPropagation();

  //Make ajax request to tvmaze API
  $.get(`https://api.tvmaze.com/shows/${showId}`, function (data) {
    //Update current show
    currentShow = data;

    $("#show_name").text(currentShow.name || "NA");
    $("#show_image").attr(
      "src",
      currentShow.image
        ? currentShow.image.medium
        : "/img/No_Image_Available.jpg"
    );
    $("#show_image").attr(
      "alt",
      currentShow.image ? currentShow.name : "No Image Available"
    );
    $("#show_language").text(currentShow.language || "NA");
    $("#show_rating").text(currentShow.rating.average || "NA");
    $("#show_network").text(currentShow.network ? currentShow.network.name : "NA");
    $("#show_summary").text(
      currentShow.summary
        ? currentShow.summary.replace(/(<([^>]+)>)/gi, "")
        : "NA"
    );
    $("#show_genres_list").text("");
    for (let i = 0; i < currentShow.genres.length; i++) {
      $("#show_genres_list").append(`<li>${currentShow.genres[i]}</li>`);
    }

    backToShows.show();
    showsList.hide();
    show.show();
  });
};

// reset state
const reset = (e) => {
  e.preventDefault();
  e.stopPropagation();
  searchResults = [];
  currentShow = null;
  showsList.hide();
  show.hide();
};

//Render attempts list UI
const renderShowsList = () => {
  //Reset list
  showsList.text("");
  backToShows.hide();

  //Loop over attempts list to render the list items
  for (let i = 0; i < searchResults.length; i++) {
    const result = searchResults[i];
    const listItem = `<li><a href="${result.show.url}" onclick="viewShow(event,${result.show.id})">${result.show.name}</a></li>`;
    showsList.append(listItem);
  }
  showsList.show();
  show.hide();

  //Reset search term input value for next attempt
  searchInput.val("");
};
