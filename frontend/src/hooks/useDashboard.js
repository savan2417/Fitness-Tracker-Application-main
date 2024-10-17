import { useContext, useEffect } from 'react';
import DashboardContext from '../contexts/dashboardContext';
import { useAuthContext } from './useAuthContext';

export const useDashboard = (timeRange = 'week') => {
  const { user } = useAuthContext();
  const { dashboardData, dispatch, isLoading, error } =
    useContext(DashboardContext);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      try {
        dispatch({ type: 'SET_LOADING' });
        const token = user.accessToken;

        const response = await fetch(
          `https://fittrackbackend-sgj9.onrender.com/api/dashboard?range=${timeRange}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        dispatch({ type: 'SET_DASHBOARD_DATA', payload: data });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    };

    if (!dashboardData) {
      fetchDashboardData(); // Only fetch if no data exists in the context
    }
  }, [user, timeRange, dashboardData, dispatch]);

  return { dashboardData, isLoading, error };
};
