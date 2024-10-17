import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart2, Heart, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the signup page, passing the email as state
    navigate('/signup', { state: { email } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Track Your Fitness Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Achieve your fitness goals with our comprehensive tracking
                  tools and personalized insights.
                </p>
              </div>
              <div className="space-x-4">
                <Link className={buttonVariants()} to="/signup">
                  Sign up
                </Link>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  to="/login"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get in-depth insights into your fitness progress with our
                  advanced analytics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Health Monitoring</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Keep track of your vital health metrics and receive
                  personalized recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Goal Setting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Set and achieve your fitness goals with our smart
                  goal-tracking system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your Journey Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                  Join thousands of users who have transformed their lives with
                  FitTrack.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Capture email input
                    required
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{' '}
                  <Link to="/terms" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
