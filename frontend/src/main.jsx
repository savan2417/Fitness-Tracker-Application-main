import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { WorkoutsContextProvider } from './contexts/WorkoutContext.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { DashboardProvider } from './contexts/dashboardContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <DashboardProvider>
          <App />
        </DashboardProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
