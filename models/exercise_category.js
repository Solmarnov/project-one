// id, exercise_category, description

module.exports = function(sequelize, DataTypes) {
  const ExerciseCategory = sequelize.define("ExerciseCategories", {
    exercise_cateogry: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  ExerciseCategory.associate = function(models) {
    // Associating ExerciseCategory with ExerciseTypes
    // When an ExerciseCategory is deleted, also delete any associated ExerciseTypes
    ExerciseCategory.hasMany(models.ExerciseTypes, {
      foreignKey: {
        allowNull: true
      },
      onDelete: "SET NULL",
    });
  };

  return ExerciseCategory;
}