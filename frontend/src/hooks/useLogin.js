import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://fittrackbackend-sgj9.onrender.com/api/user/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(`${json.error.title}: ${json.error.message}`);
      }

      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update the authContext
      dispatch({ type: 'LOGIN', payload: json });
    } catch (err) {
      setError(err.message || 'Server is unreachable');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
