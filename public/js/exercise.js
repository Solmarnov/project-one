$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/exercises_data").then(data => {
        $(".blog-container").text(data.exercise_name);
    });
});