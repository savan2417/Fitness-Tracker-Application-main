import { useState, useEffect } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// UI components
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

// icons
import { Activity, User, Mail, Lock } from 'lucide-react';

export function SignupPage() {
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { signup, error, isLoading } = useSignup();

  // On component mount, check if email was passed via state
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    setPasswordError('');
    await signup(username, email, password);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 7,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center px-4 md:px-8 lg:px-16 space-y-6 md:space-y-0 md:space-x-8"
      style={{ backgroundImage: 'url(/assets/bg-login.jpg)' }}
    >
      {/* Welcome Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2"
      >
        <Card className="bg-white text-black shadow-lg p-6 text-center md:text-left">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome to FitTrack!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Sign up and start tracking your workouts and progress today!
            </p>

            <p className="text-sm text-gray-600 hidden md:block">
              Join a community of fitness enthusiasts, get access to
              personalized workout plans, and see real-time analytics on your
              progress. Start transforming your fitness journey today with
              FitTrack!
            </p>
            <ul className="text-sm text-gray-600 mt-4 space-y-2 list-disc list-inside hidden md:block">
              <li>Track your workouts with ease</li>
              <li>Analyze your progress with detailed reports</li>
              <li>Set and achieve fitness goals</li>
              <li>Join a supportive community</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Signup Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2"
      >
        <Card className="w-full p-6 bg-white shadow-xl md:shadow-2xl rounded-lg">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Activity className="h-8 w-8 text-primary mr-2" />
              <CardTitle className="text-2xl font-bold">FitTrack</CardTitle>
            </div>
            <CardDescription>Create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <motion.div variants={itemVariants} className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      id="username"
                      placeholder="John Doe"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="pl-8"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="pl-8"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="pl-8"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      id="confirm-password"
                      placeholder="••••••••"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      className="pl-8"
                    />
                  </div>
                </motion.div>
                {error && <p className="text-red-500">{error}</p>}
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
                <motion.div variants={itemVariants} className="w-full">
                  <Button className="w-full" disabled={isLoading}>
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm text-center text-gray-500"
            >
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </motion.p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
