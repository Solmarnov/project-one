$(document).ready(() => {

  $("button#aerobics-training-workout").on("click", (event) => {
    const workoutCategory = event.target.outerText
    const workoutCategoryObj = {
      workoutCategory: workoutCategory
    };
    console.log(workoutCategoryObj);
    getWorkoutCategory(workoutCategoryObj);
    
    $("form.create-aerobics-workout").removeAttr("hidden");
    $("form.create-anaerobic-workout").attr("hidden");
  });
  
  function getWorkoutCategory(workoutCategoryObj) {
    $.get("/api/workout-category", workoutCategoryObj)
    .then(workoutData => {
      console.log(workoutData);
      $(".workout-type-heading").text(workoutData.exercise_category);
      $(".workout-type-description").text(workoutData.description);
      $(".workout-type-summary").deleteAttr("hidden");
    });
  }
  
});