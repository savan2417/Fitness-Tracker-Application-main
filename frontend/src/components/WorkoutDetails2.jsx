/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dumbbell, Trash } from 'lucide-react';

const WorkoutDetails2 = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleClick = async () => {
    try {
      if (!user) {
        // console.log('No user');
        return;
      }

      const token = user.accessToken;
      const response = await fetch(
        `https://fittrackbackend-sgj9.onrender.com/api/workouts/${workout._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(
          `${errorResponse.error.title}: ${errorResponse.error.message}`
        );
        return;
      }

      const deletedWorkout = await response.json();
      setError(null);
      // console.log('Workout deleted:', deletedWorkout);

      dispatch({ type: 'DELETE_WORKOUT', payload: deletedWorkout });
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // console.error('Failed to delete workout:', err);
      setError('Failed to delete workout');
    }
  };

  return (
    <Card className="sm:p-2 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-lg font-medium">
            <Dumbbell className="mr-2 h-5 w-5 text-muted-foreground" />
            {workout.title}
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleClick}>
            <Trash className="mr-1 h-4 w-4" /> Delete
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base mb-1">
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <p className="text-base mb-1">
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p className="text-base mb-1">
          <strong>Duration (minutes): </strong>
          {workout.minutes}
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </CardContent>
    </Card>
  );
};

export default WorkoutDetails2;
