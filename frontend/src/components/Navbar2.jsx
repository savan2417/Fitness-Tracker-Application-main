import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

import { Activity, User, Menu, X, LogOut } from 'lucide-react';
import { Button } from './ui/button';

const Navbar2 = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container max-w-none px-6 lg:px-10 h-16 flex gap-5 items-center justify-between">
        <Link className="flex items-center" to="/">
          <Activity className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            FitTrack
          </span>
        </Link>

        {/* Hamburger menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            to="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            to="/about"
          >
            About
          </Link>
        </nav>

        {/* Profile and Logout Button */}
        {user && (
          <div className="relative ml-auto flex items-center">
            <Button
              onClick={toggleProfile}
              variant="default"
              className="flex items-center lg:space-x-2"
            >
              <User className="mr-0 lg:mr-2 h-4 w-4" />
              <span className="hidden lg:inline">Profile</span>
            </Button>

            {/* Logout button appearing on profile click */}
            {isProfileOpen && (
              <Button
                variant="default"
                onClick={() => navigate('/logout')}
                className="ml-4 flex items-center text-sm font-medium"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white/90 sm:backdrop-blur-sm dark:bg-gray-900/80 dark:backdrop-blur-sm shadow-lg lg:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                to="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                to="/about"
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar2;
