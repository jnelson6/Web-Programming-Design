/* Event listeners for button clicks and the mobile navbar */
function goToBookmark(bookmark){
    window.location=bookmark;
}

document.addEventListener('DOMContentLoaded', function(loadEvent) {
    document.getElementById('mobile').addEventListener("click", function(event) {
        if(document.getElementsByClassName('mobile-menu')[0].style.display == 'none'){
            document.getElementsByClassName('mobile-menu')[0].style.display = 'flex';
        } else {
            document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
        }
    }, false);

    if(document.getElementById("ducklings-button")){
        document.getElementById('ducklings-button').addEventListener("click", function(event) {
            goToBookmark("#ducklings");
        }, false);
    }

    if(document.getElementById("adults-button")){
        document.getElementById('adults-button').addEventListener("click", function(event) {
            goToBookmark("#adults");
        }, false);
    }

    if(document.getElementById("duck-people-button")){
        document.getElementById('duck-people-button').addEventListener("click", function(event) {
            goToBookmark("#duck-people");
        }, false);
    }

    if(document.getElementById("duck-info-button")){
        document.getElementById('duck-info-button').addEventListener("click", function(event) {
            goToBookmark("#duck-info");
        }, false);
    }

    if(document.getElementById("kinds-button")){
        document.getElementById('kinds-button').addEventListener("click", function(event) {
            goToBookmark("kinds.html");
        }, false);
    }

 }, false);
    