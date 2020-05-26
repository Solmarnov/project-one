module.exports = function(sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    workout_type: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.STRING,
    },
    average_heart_rate: {
      type: DataTypes.INTEGER
    },
    calories_burned: {
      type: DataTypes.INTEGER
    },
    difficulty: {
      type: DataTypes.STRING
    }
  });
  return Workout;
};