import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://fittrackbackend-sgj9.onrender.com/api/user/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        const json = await response.json();
        setIsLoading(false);
        setError(`${json.error.title}: ${json.error.message}`);
        return;
      }

      const json = await response.json();

      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    } catch (err) {
      // Handle network errors (e.g., server offline)
      setIsLoading(false);
      setError(
        err.message ||
          'Network error: Unable to reach the server. Please try again later.'
      );
    }
  };

  return { signup, isLoading, error };
};
