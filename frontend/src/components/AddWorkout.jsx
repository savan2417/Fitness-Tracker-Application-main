import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function AddWorkout() {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [minutes, setMinutes] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when the request is made
    setError(null); // Clear previous errors

    const workout = { title, load, reps, minutes };
    const token = user.accessToken; // Extract the JWT token

    try {
      const response = await fetch(
        'https://fittrackbackend-sgj9.onrender.com/api/workouts',
        {
          method: 'POST',
          body: JSON.stringify(workout),
          headers: {
            Authorization: `Bearer ${token}`, // Add token to Authorization header
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        // Check if the server responded but the request failed
        setError(
          result.error?.message ||
            'Failed to add workout. Please check your input.'
        );
      } else {
        // Clear form after successful submission
        setTitle('');
        setLoad('');
        setReps('');
        setMinutes('');
        setError(null);
        // console.log('new workout added', result);

        // Update workouts state to include the new workout
        dispatch({ type: 'CREATE_WORKOUT', payload: result });
      }
    } catch {
      // Handle network or server errors
      setError('Could not connect to the server. Please try again later.');
    } finally {
      setLoading(false); // Stop loading after the request is completed
    }
  };

  return (
    <div className="flex justify-center items-center p-2 sm:p-6 bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Add a New Workout</CardTitle>
          <CardDescription>Log your workout details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Workout Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter workout title"
                className="mt-1"
                required
                disabled={loading} // Disable input during loading
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="load">Load (kg)</Label>
                <Input
                  id="load"
                  type="number"
                  value={load}
                  onChange={(e) => setLoad(e.target.value)}
                  placeholder="e.g. 50"
                  className="mt-1"
                  required
                  disabled={loading} // Disable input during loading
                />
              </div>
              <div>
                <Label htmlFor="reps">Reps</Label>
                <Input
                  id="reps"
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  placeholder="e.g. 12"
                  className="mt-1"
                  required
                  disabled={loading} // Disable input during loading
                />
              </div>
            </div>
            <div>
              <Label htmlFor="minutes">Minutes</Label>
              <Input
                id="minutes"
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="e.g. 30"
                className="mt-1"
                required
                disabled={loading} // Disable input during loading
              />
            </div>
            <Button
              type="submit"
              variant="default"
              className="w-full"
              disabled={loading} // Disable button during loading
            >
              {loading ? 'Adding Workout...' : 'Add Workout'}{' '}
              {/* Loading indicator */}
            </Button>
            {error && <p className="text-red-500 w-full">{error}</p>}{' '}
            {/* Error message */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
