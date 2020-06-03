$(document).ready(() => {
  getExerciseCategories();

  $("#aerobic-exercise").on("click", function(event) {
    console.log($(this).attr("data-id"));
    const exerciseCategoryId = $("#aerobic-exercise").attr("data-id");
    console.log(exerciseCategoryId);
    const exerciseCategory = event.target.outerText
    const exerciseCategoryObj = {
      exerciseCategory: exerciseCategory
    };
    getExerciseCategory(exerciseCategoryObj);
    
    $("form.create-aerobics-workout").removeAttr("hidden");
    $("form.create-anaerobic-workout").attr("hidden");
  });
  
  function getExerciseCategory(Obj) {
    console.log(Obj);
    $.ajax({
      url: "/api/exercise-category",
      type: "GET",
      data: Obj
    }).then(exerciseData => {
      console.log(exerciseData);
      $(".exercise-type-heading").text(exerciseData.exercise_category);
      $(".exercise-type-description").text(exerciseData.description);
      $(".exercise-type-summary").deleteAttr("hidden");
    });
  }

  function getExerciseCategories() {
    $.get("/api/exercise-categories")
    .then(data => {
      console.log("Test");
      console.log(data);
    });
  }
  
});