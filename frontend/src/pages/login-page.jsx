/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

// Animations and UI elements
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

// Icons
import { Activity, Facebook, Instagram, Twitter } from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  // Framer motion animation logic
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
      {/* Welcome Back Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2"
      >
        <Card className="bg-white text-black shadow-lg p-6 text-center md:text-left">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Continue tracking your fitness journey with FitTrack and stay
              motivated to reach your goals!
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Login Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2"
      >
        <Card className="w-full p-6 bg-white shadow-xl rounded-lg">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Activity className="h-8 w-8 text-primary mr-2" />
              <CardTitle className="text-2xl font-bold">FitTrack</CardTitle>
            </div>
            <CardDescription className="text-center">
              Login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <motion.div variants={itemVariants}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                  />
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-right text-sm text-primary hover:underline"
                >
                  <Link to="/forgot-password">Forgot Password?</Link>
                </motion.p>
                {error && <p className="text-red-500">{error}</p>}
                <motion.div variants={itemVariants}>
                  <Button className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </Button>
                </motion.div>
              </div>
            </form>
            <div className="flex items-center justify-between my-4">
              <hr className="w-1/3" />
              <span className="text-gray-500">or</span>
              <hr className="w-1/3" />
            </div>
            {/* Social Login - Only logos on mobile */}
            <div className="flex justify-around">
              <Button variant="outline" className="w-full mr-2">
                <Instagram className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Instagram</span>
              </Button>
              <Button variant="outline" className="w-full mr-2">
                <Facebook className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Facebook</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Twitter</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm text-center text-gray-500"
            >
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </motion.p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
