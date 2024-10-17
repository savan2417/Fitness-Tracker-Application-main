const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  patchWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

router.use(validateToken);

//@route /api/workouts
router.route('/').get(getWorkouts).post(createWorkout);

//@route /api/workouts/:id
router.route('/:id').get(getWorkout).delete(deleteWorkout).patch(patchWorkout);

module.exports = router;
