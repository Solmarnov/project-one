INSERT INTO ExerciseTypes (`exercise_type`, `description`, `createdAt`, `updatedAt`,`ExerciseCategoryId`)
VALUES 
  (
    "Aerobics", 'Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness).', now(), now(), 1
  ),
  (
    "Circuit training", 'Circuit training is a form of body conditioning or endurance training or resistance training using high-intensity aerobics. It targets strength building and muscular endurance. An exercise "circuit" is one completion of all set exercises in the program. When one circuit is complete, one begins the first exercise again for the next circuit. Traditionally, the time between exercises in circuit training is short, often with rapid movement to the next exercise.', now(), now(), 1
  ),
  (
    "Running", 'Running is a type of gait characterized by an aerial phase in which all feet are above the ground. This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg in an inverted pendulum fashion', now(), now(), 1
  ),
  (
    "Bodybuilding", "Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature for aesthetic purposes.", now(), now(), 2
  ),
  (
    "Functional training", 'Functional training is a classification of exercise which involves training the body for the activities performed in daily life.', now(), now(), 2
  ),
  (
    "Strength training", 'Strength training involves the performance of physical exercises which are designed to improve strength and endurance. It is often associated with the use of weights but can take a variety of different forms.', now(), now(), 2
  );
