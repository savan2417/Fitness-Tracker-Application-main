const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    load: {
      type: Number,
      required: [true, 'Please add the load'],
    },
    reps: {
      type: Number,
      required: [true, 'Please add the number of reps'],
    },
    minutes: {
      type: Number,
      required: [true, 'Please add the duration in minutes'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
