$(document).ready(() => {
  getUserData();

  $(".user-information").on("submit", event => {
    event.preventDefault();
    console.log(event);
    const memberData = {
      first_name: $("#first-name")
        .val()
        .trim(),
      last_name: $("#last-name")
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
        .trim()
    };

    UserInfo(memberData);

  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function UserInfo(memberData) {
    console.log(memberData);
    $.ajax({
      url: "/api/member/" + $(".member-name").attr("data-user-id"),
      type: "PUT",
      data: memberData
    })
    .then(userData => {
      console.log(userData);
      getUserData();
    });
    /*$.put("/api/member/" + $(".member-name").attr("data-user-id"), memberData)
      .then(() => {
        location.replace("/homepage");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);*/
  }

  /*function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }*/


  function getUserData() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
      console.log(data);
      $(".member-name").text(data.email);
      $(".member-name").attr("data-user-id", data.id);
      $("#first-name").val(data.first_name);
      $("#last-name").val(data.last_name);
      $("#age").val(data.age);
      $("#sex").val(data.sex);
      $("#mobile").val(data.mobile);
      $("#height").val(data.height);
      $("#weight").val(data.weight);
      $("#target-weight").val(data.goal_weight);
    });
  }
});
