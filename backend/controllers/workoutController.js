// @ts-nocheck
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Workout = require('../models/workoutModel');
//@desc mongoose id validator and workout finder
const validateAndFindById = require('../middleware/validateFind');

//@desc get all workouts
//@route GET /api/workouts
//@access private
const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({ user_id: req.user.id }).sort({
    createdAt: -1,
  });
  if (!workouts) {
    res.status(400);
    throw new Error('No workouts found!');
  }
  res.status(200).json(workouts);
});

//@desc Create a workout
//@route POST /api/workouts
//@access private
const createWorkout = asyncHandler(async (req, res) => {
  const { title, load, reps, minutes } = req.body;
  if (!title || !load || !reps || !minutes) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }
  const workout = await Workout.create({
    user_id: req.user.id,
    title,
    load,
    reps,
    minutes,
  });
  res.status(201).json(workout);
});

//@desc get a workout with the id
//@route GET /api/workouts/:id
//@access private
const getWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const workout = await validateAndFindById(id, res);

  if (workout.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Users don't have permission to view other users' workouts!"
    );
  }

  res.status(200).json(workout);
});

//@desc delete a workout with id
//@route DELETE /api/workouts/:id
//@access private
const deleteWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const workout = await validateAndFindById(id, res);

  if (workout.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Users don't have permission to delete other users' workouts!"
    );
  }

  await Workout.deleteOne({ _id: id });

  res.status(200).json(workout);
});

//@desc update a single workout
//@route PATCH /api/workouts/:id
//@access private
const patchWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const workout = await validateAndFindById(id, res);

  if (workout.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Users don't have permission to update other users' workouts!"
    );
  }
  const updatedWorkout = await Workout.findByIdAndUpdate(id, req.body, {
    new: true, // return the updated document
    runValidators: true, //Ensure the update obeys the schema's validators
  });

  res.status(200).json(updatedWorkout);
});

module.exports = {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  patchWorkout,
};
