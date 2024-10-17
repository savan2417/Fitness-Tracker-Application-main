/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Activity,
  BarChart2,
  Calendar,
  Clock,
  Heart,
  LineChart,
  Smartphone,
  Users,
} from 'lucide-react';

export function FeaturesPage() {
  const features = [
    {
      icon: <Activity className="h-8 w-8 text-primary mb-2" />,
      title: 'Activity Tracking',
      description:
        'Automatically track your steps, distance, and active minutes throughout the day.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary mb-2" />,
      title: 'Heart Rate Monitoring',
      description:
        'Keep an eye on your heart rate during workouts and throughout the day for optimal training.',
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary mb-2" />,
      title: 'Workout Analytics',
      description:
        'Get detailed insights into your workouts, including duration, intensity, and calories burned.',
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary mb-2" />,
      title: 'Workout Planning',
      description:
        'Plan your workouts in advance and get reminders to stay on track with your fitness goals.',
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary mb-2" />,
      title: 'Progress Tracking',
      description:
        'Visualize your fitness progress over time with easy-to-understand charts and graphs.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary mb-2" />,
      title: 'Community Challenges',
      description:
        'Join community challenges to stay motivated and compete with friends.',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary mb-2" />,
      title: 'Mobile App',
      description:
        'Access your fitness data on-the-go with our user-friendly mobile app.',
    },
    {
      icon: <Clock className="h-8 w-8 text-primary mb-2" />,
      title: 'Sleep Analysis',
      description:
        'Track your sleep patterns to improve your overall health and recovery.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">FitTrack Features</h1>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        Discover the powerful features that make FitTrack your ultimate fitness
        companion. From detailed activity tracking to personalized insights,
        we've got everything you need to reach your fitness goals.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
