/* Interaction with user (Event listener) */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("duck-image").addEventListener("mouseenter", function(event){
        this.src = "img/duck2.jpg";
    }, false);

    document.getElementById("duck-image").addEventListener("mouseleave", function(event){
        this.src = "img/duck.png";
    }, false);
});