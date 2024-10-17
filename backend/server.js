require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const dashboardRoutes = require('./routes/dashboard');
const errorHandler = require('./middleware/errorHandler');

// Express app
const app = express();

// @ts-ignore
app.use(helmet());
//middleware
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

//routes
app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/dashboard', dashboardRoutes);

//error handling middleware
app.use(errorHandler);

//function to start the server
const startServer = async () => {
  try {
    //Connect to the database
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database ', connect.connection.name);

    //Listen for requests
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

startServer();
