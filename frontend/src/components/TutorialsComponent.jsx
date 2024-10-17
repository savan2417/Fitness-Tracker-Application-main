import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import squatImg from '../assets/tutorials/squats.jpeg'; // Import image from assets folder
import plankImg from '../assets/tutorials/plank.jpeg';
import deadliftImg from '../assets/tutorials/deadlift.jpeg';

const tutorials = [
  {
    title: 'Proper Squat Form',
    duration: '3 minutes • Beginner',
    image: squatImg,
    youtubeLink: 'https://www.youtube.com/watch?v=YaXPRqUwItQ', // Proper Squat Form YouTube link
  },
  {
    title: 'Effective Plank Technique',
    duration: '2 minutes • All Levels',
    image: plankImg,
    youtubeLink: 'https://www.youtube.com/watch?v=pSHjTRCQxIw', // Effective Plank YouTube link
  },
  {
    title: 'Mastering the Deadlift',
    duration: '8 minutes • Intermediate',
    image: deadliftImg,
    youtubeLink: 'https://www.youtube.com/watch?v=ytGaGIn3SjE', // Deadlift YouTube link
  },
];

const TutorialsComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          Featured Tutorials
        </CardTitle>
        <CardDescription className="text-md md:text-lg">
          Learn proper form and techniques for various exercises.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-1 pt-0 sm:p-6 sm:pt-0">
        <div className="space-y-4">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center w-full p-3 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 w-full">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-medium">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {tutorial.duration}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full md:w-auto mt-3 md:mt-0"
                onClick={() => window.open(tutorial.youtubeLink, '_blank')}
              >
                Watch Now
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorialsComponent;
