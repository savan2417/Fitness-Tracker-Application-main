const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

const validateAndFindById = async (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400); // Bad request
    throw new Error('Invalid ID format');
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    res.status(404);
    throw new Error('Workout not found!');
  }

  return workout;
};

module.exports = validateAndFindById;
