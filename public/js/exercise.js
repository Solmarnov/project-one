$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var blogContainer = $(".blog-container");
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    var posts;

    // This function grabs posts from the database and updates the view
    function getPosts() {

        $.get("/api/exercises_data", function (data) {
            //console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                //displayEmpty();
                //console.log("test");
            }
            else {
                initializeRows();
            }
        });
    }
    // Getting the initial list of posts
    getPosts();

    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
        //$.get("/api/exercises_data").then(data) => {
        //  console.log('DATAAA', data)
        blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
        //}
    }

    // This function constructs a post's HTML
    function createNewRow(post) {
        var newPostCard = $("<div>");
        newPostCard.addClass("card");
        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-default");
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        var newPostCategory = $("<h5>");
        //newPostCategory.text(data.difficuilty);
        /*newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top":
                "-15px"
        });*/
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(post.exercise_name + " ");
        newPostCategory.text(post.difficuilty);
        newPostBody.text(post.body_area);
        var formattedDate = new Date(post.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
        newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        newPostCardHeading.append(newPostTitle);
        newPostCardHeading.append(newPostCategory);
        newPostCardBody.append(newPostBody);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", post);
        return newPostCard;
    }

    // This function does an API call to delete posts
    function deletePost(id) {
        //console.log("test")
        $.ajax({
            method: "DELETE",
            url: "/api/deleteExercise/" + id
        })
            .then(function () {
                //console.log("test")
                getPosts();
            });
    }

    // This function figures out which post we want to delete and then calls
    // deletePost
    function handlePostDelete() {
        var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
        //console.log(currentPost.id);
        deletePost(currentPost.id);
        //deletePost(1);
    }

    // This function figures out which post we want to edit and takes it to the
    // Appropriate url
    function handlePostEdit() {
        var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
        //console.log(currentPost.id)
        window.location.href = "/CreateExercises?exercise_id=" + currentPost.id;
    }
});