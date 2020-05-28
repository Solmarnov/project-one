module.exports = function(sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_name: {
      type: DataTypes.STRING
    },
    body_area: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.STRING
    }
  });
  return Exercise;
};