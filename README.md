FitTrack MERN Stack Application

Tech Stack

    Frontend: React.js, Tailwind CSS, Shadcn UI, Framer Motion
    Backend: Node.js, Express.js, MongoDB, Mongoose
    Authentication: JWT-based authentication
    Routing: React Router for frontend routing, Express for backend routing
    Tools & Libraries: Axios, Moment.js, bcrypt, Helmet, Validator

Prerequisites

Before you begin, ensure you have met the following requirements:

    Node.js (v16.x or later)
    npm or yarn
    MongoDB (installed and running locally or hosted on MongoDB Atlas)


Install dependencies
Frontend:

bash

cd frontend
npm install

Backend:

bash

cd backend
npm install

Environment Variables

You need to configure environment variables for both the frontend and backend.
Frontend .env file

In the frontend folder, create a .env file:


PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Ensure that these .env files are excluded from version control by including them in the .gitignore.
Running the App
Backend

Navigate to the backend folder and run the server:

bash

cd backend
npm start


Frontend

In another terminal window, navigate to the frontend folder and run the React app:

bash

cd frontend
npm start


