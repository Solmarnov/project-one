$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
  $(".user-information").on("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const memberData = {
      firstName: $("#first-name")
        .val()
        .trim(),
      lastName: $("#last-name")
        .val()
        .trim(),
      age: $("#age")
        .val()
        .trim(),
      sex: $("#sex")
        .val()
        .trim(),
      mobile: $("#mobile")
        .val()
        .trim(),
      height: $("#height")
        .val()
        .trim(),
      weight: $("#weight")
        .val()
        .trim(),
      goal_weight: $("#target-weight")
        .val()
        .trim(),
    };

    if (!memberData.firstName || !memberData.lastName) {
      return;
    }

    UserInfo(memberData);
    $("#first-name").val("");
    $("#last-name").val("");
    $("#age").val("");
    $("#sex").val("");
    $("#mobile").val("");
    $("#height").val("");
    $("#weight").val("");
    $("#goal_weight").val("");
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function UserInfo(memberData) {
    console.log(memberData);
    /* $.post("/api/member/id",memberData)
        .then(() => {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);*/
  }

  /* function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }*/
});
