// @ts-nocheck
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Workout = require('../models/workoutModel');
const moment = require('moment'); // For date manipulation

//@desc Get dashboard data
//@route GET /api/dashboard
//@access private
const getDashboardData = asyncHandler(async (req, res) => {
  const { range } = req.query; // Get the time range from the query parameters

  // Determine date range based on the time range
  let startDate;
  switch (range) {
    case 'month':
      startDate = moment().startOf('month').toDate();
      break;
    case 'year':
      startDate = moment().startOf('year').toDate();
      break;
    case 'week':
    default:
      startDate = moment().startOf('week').toDate();
      break;
  }

  // Fetch workouts from the database within the specified date range
  const workouts = await Workout.find({
    user_id: req.user.id,
    createdAt: { $gte: startDate },
  }).sort({ createdAt: -1 });

  // Check if there are no workouts
  if (!workouts || workouts.length === 0) {
    return res.status(200).json({
      workoutData: [],
      calorieData: [],
      workoutTypeData: [],
      totalWorkouts: 0,
      caloriesBurned: 0,
      activeMinutes: 0,
      progress: 0,
    });
  }

  // Aggregate data
  const totalWorkouts = workouts.length;

  // More realistic calories burned calculation based on load, reps, and duration (minutes)
  const totalCaloriesBurned = workouts.reduce((acc, workout) => {
    // Assuming calories burned = load (kg) * reps * minutes * 0.1 (adjust based on the workout intensity)
    return acc + workout.load * workout.reps * workout.minutes * 0.05;
  }, 0);

  // Sum up active minutes
  const activeMinutes = workouts.reduce(
    (acc, workout) => acc + workout.minutes,
    0
  );

  // Grouping workouts by date
  const groupWorkoutsByDate = (workouts) => {
    return workouts.reduce((acc, workout) => {
      const date = moment(workout.createdAt).format('YYYY-MM-DD'); // Grouping by day
      if (!acc[date]) {
        acc[date] = { duration: 0, calories: 0 };
      }
      acc[date].duration += workout.minutes; // Sum workout duration
      acc[date].calories +=
        workout.load * workout.reps * workout.minutes * 0.05; // Sum calories burned
      return acc;
    }, {});
  };

  const groupedWorkouts = groupWorkoutsByDate(workouts);

  // Format data for charts
  const workoutData = Object.keys(groupedWorkouts).map((date) => ({
    name: moment(date).format('ddd'),
    duration: groupedWorkouts[date].duration, // Total workout duration for that day
  }));

  const calorieData = Object.keys(groupedWorkouts).map((date) => ({
    name: moment(date).format('ddd'),
    calories: groupedWorkouts[date].calories, // Total calories burned for that day
  }));

  // Aggregate workout types
  const workoutTypes = workouts.reduce((acc, workout) => {
    const type = workout.title; // Using the title as the type
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const workoutTypeData = Object.keys(workoutTypes).map((type) => ({
    name: type,
    value: workoutTypes[type],
  }));

  // Calculate progress as a percentage of some target
  let progress =
    totalWorkouts > 0 ? Math.min((totalWorkouts / 30) * 100, 100) : 0;

  // Limit progress to two decimal places
  progress = parseFloat(progress.toFixed(2));

  // Send aggregated data
  res.status(200).json({
    workoutData,
    calorieData,
    workoutTypeData,
    totalWorkouts,
    caloriesBurned: totalCaloriesBurned,
    activeMinutes,
    progress,
  });
});

module.exports = getDashboardData;
