// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/homepage");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/homepage");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to these routes.
  // If a user who is not logged in tries to access these routes they will be redirected to the signup page
  app.get("/homepage", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/schedule", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/schedule.html"));
  });

  app.get("/exercises", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercises.html"));
  });

  app.get("/CreateExercises", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/CreateExercise.html"));
  });

  app.get("/workouts", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/workouts.html"));
  });
};
