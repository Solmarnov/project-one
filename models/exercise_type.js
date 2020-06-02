// id, exercise_type, description, exercise_category_id

module.exports = function(sequelize, DataTypes) {
  const ExerciseType = sequelize.define("ExerciseTypes", {
    exercise_type: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  ExerciseType.associate = function(models) {
    // We're saying that an ExerciseType should belong to an ExerciseCategory
    ExerciseType.belongsTo(models.ExerciseCategories, {
      foreignKey: {
        allowNull: true
      }
    });
  }

  return ExerciseType;
}