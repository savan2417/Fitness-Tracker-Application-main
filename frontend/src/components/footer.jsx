import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-100">
              About FitTrack
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              FitTrack is your ultimate fitness companion, helping you achieve
              your health goals with cutting-edge technology and personalized
              insights.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/about"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Support
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/faq"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Newsletter
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Stay up to date with the latest features and releases.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow text-sm"
              />
              <Button type="submit" className="text-xs">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 gap-3">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} FitTrack. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-3">
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                info@fittrack.com
              </div>
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                +1 (123) 456-7890
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
