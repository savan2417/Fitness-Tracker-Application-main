import { createContext, useReducer } from 'react';
import { dashboardReducer } from './reducers/dashboardReducer';

const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
export const DashboardProvider = ({ children }) => {
  const initialState = {
    dashboardData: null,
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
