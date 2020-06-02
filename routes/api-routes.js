// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for updating user 
  app.put("/api/member/:id", (req, res) => {
    // log body of request when passed from front
    console.log(req.body);

    const userUpdate = clean(req.body);

    db.User.update(userUpdate, {
      where: {
        id: req.params.id
      }
    })
      .then((dbUser) => {
        console.log(dbUser);
        res.json(dbUser);
        // res.redirect(302, "/api/user_data")
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      db.User.findOne({
        where: {
          id: req.user.id
        }
      }).then(dbUser => {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json(dbUser.dataValues);
      });
    }
  });

  // POST route for saving a new post
  app.post("/api/createExercise", (req, res) => {
    db.Exercise.create({
      exercise_name: req.body.title,
      body_area: req.body.body,
      difficulty: req.body.difficulty
    })
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  /*app.get("/api/exercises_by_difficulty/:difficulty", (req, res) => {
    db.Exercise.find({
      where: {
        difficulty: req.params.difficulty
      }
    })
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });*/

  app.get("/api/exercises_data", (req, res) => {
    if (!req.Exercise) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      db.Exercise.findOne({
        where: {
          id: req.Exercise.id
        }
      }).then(dbExercise => {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json(dbExercise.dataValues);
      });
    }
  });

  // DELETE route for deleting posts
  app.delete("/api/createExercise/:id", (req, res) => {
    db.Exercise.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbExercise) {
        res.json(dbExercise);
      });
  });

  // PUT route for updating posts
  app.put("/api/createExercise", (req, res) => {
    db.Exercise.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbExercise) {
        res.json(dbExercise);
      });
    //Save all the user information to the database

    // This function removes null, undefined, and "" blank values from an object 
    function clean(obj) {
      for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
          delete obj[propName];
        }
      }
      return obj;
    }
  })
}
