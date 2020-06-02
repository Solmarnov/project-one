// id, exercise_name, body_area, muscle_group, description

module.exports = function(sequelize, DataTypes) {
  const ExerciseMovement = sequelize.define("ExerciseMovements", {
    exercise_name: {
      type: DataTypes.STRING
    },
    body_area: {
      type: DataTypes.STRING
    },
    muscle_group: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  return ExerciseMovement;
};