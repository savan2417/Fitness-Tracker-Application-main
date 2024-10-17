import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useLogout } from '../hooks/useLogout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Activity, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function LogoutPage() {
  const { logout } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      logout(); // Call the logout function to log the user out
    }, 3500);
  }, [logout]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="w-[350px]">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Activity className="h-8 w-8 text-primary mr-2" />
              <CardTitle className="text-2xl font-bold">FitTrack</CardTitle>
            </div>
            <CardDescription>Logging you out</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <LogOut className="h-16 w-16 text-primary" />
            </motion.div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-center text-gray-500 mb-4">
              Thank you for using FitTrack. See you soon!
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
