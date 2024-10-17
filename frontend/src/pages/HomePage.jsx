import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from '@/hooks/useWorkoutsContext';

import AddWorkout from '../components/AddWorkout';
import WorkoutDetails2 from '../components/WorkoutDetails2';
import DashboardComponent from '../components/Dashboard';
import BlogsTab from '../components/BlogsTab';

import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Tabs, TabsContent } from '../components/ui/tabs';
import {
  BookOpen,
  Dumbbell,
  Home,
  SquareArrowRight,
  SquareArrowLeft,
} from 'lucide-react';
import TutorialsComponent from '../components/TutorialsComponent';

export default function HomePage() {
  //Fetch workouts logic

  const { workouts, dispatch } = useWorkoutsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const token = user.accessToken; // Extract the JWT token

        const response = await fetch(
          'https://fittrackbackend-sgj9.onrender.com/api/workouts',
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to Authorization header
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }

        const data = await response.json();
        dispatch({ type: 'SET_WORKOUTS', payload: data });
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, [dispatch, user]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-100 sm:w-64' : 'w-100 sm:w-16'
        } bg-white dark:bg-gray-800 p-2 shadow-md transition-all duration-300 ease-in-out`}
      >
        <nav className="sm:space-y-2 flex sm:flex-col sm:sticky sm:top-[5.6rem]">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
            className={`w-full ${
              isSidebarOpen ? 'justify-start' : 'justify-center'
            } px-1 sm:px-2`}
            onClick={() => {
              setActiveTab('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
          >
            <Home
              className={`h-5 w-5 ${
                isSidebarOpen ? 'mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5' : ''
              }`}
            />
            {isSidebarOpen && 'Dashboard'}
          </Button>
          <Button
            variant={activeTab === 'workouts' ? 'default' : 'ghost'}
            className={`w-full ${
              isSidebarOpen ? 'justify-start' : 'justify-center'
            } px-1 sm:px-2`}
            onClick={() => {
              setActiveTab('workouts');
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
          >
            <Dumbbell
              className={`h-5 w-5 ${
                isSidebarOpen ? 'mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5' : ''
              }`}
            />
            {isSidebarOpen && 'Workouts'}
          </Button>
          <Button
            variant={activeTab === 'blogs' ? 'default' : 'ghost'}
            className={`w-full ${
              isSidebarOpen ? 'justify-start' : 'justify-center'
            } px-1 sm:px-2`}
            onClick={() => {
              setActiveTab('blogs');
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
          >
            <BookOpen
              className={`h-5 w-5 ${
                isSidebarOpen ? 'mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5' : ''
              }`}
            />
            {isSidebarOpen && 'Blogs'}
          </Button>
          <Button
            variant={activeTab === 'tutorials' ? 'default' : 'ghost'}
            className={`w-full ${
              isSidebarOpen ? 'justify-start' : 'justify-center'
            } px-1 sm:px-2`}
            onClick={() => {
              setActiveTab('tutorials');
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
          >
            <BookOpen
              className={`h-5 w-5 ${
                isSidebarOpen ? 'mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5' : ''
              }`}
            />
            {isSidebarOpen && 'Tutorials'}
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-1 sm:p-6 overflow-y-auto min-h-[calc(100vh-64px)]">
        <div className="flex sm:justify-between justify-center items-center mb-0 sm:mb-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-4  bg-transparent text-black border-transparent rounded-xl shadow-sm hover:bg-black hover:text-white ease-in-out"
            >
              {isSidebarOpen ? (
                <SquareArrowLeft className="h-6 w-6" />
              ) : (
                <SquareArrowRight className="h-6 w-6" />
              )}
            </Button>
            <h1 className="hidden sm:block text-3xl font-bold">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
        </div>

        <Tabs
          defaultValue="dashboard"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsContent value="dashboard">
            <DashboardComponent />
            <AddWorkout />
          </TabsContent>
          <TabsContent value="workouts">
            <div className="p-2 sm:p-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    Recent Workouts
                  </CardTitle>
                  <CardDescription className="text-md md:text-lg">
                    {isLoading && 'Loading...'}
                    {error && `Error: ${error}`}
                    {workouts &&
                      workouts.length > 0 &&
                      `You have completed ${workouts.length} workouts!`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-1 pt-0 sm:p-6 sm:pt-0">
                  <div className="space-y-4">
                    {workouts &&
                      (workouts.length > 0 ? (
                        workouts.map((workout) => (
                          <WorkoutDetails2
                            workout={workout}
                            key={workout._id}
                          />
                        ))
                      ) : (
                        <div className="request">Please add a workout!</div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="blogs">
            <div className="p-2 sm:p-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    Latest Blog Posts
                  </CardTitle>
                  <CardDescription className="text-md md:text-lg">
                    Stay updated with fitness tips and advice.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-1 pt-0 sm:p-6 sm:pt-0">
                  <div className="space-y-4">
                    <BlogsTab />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tutorials">
            <div className="p-2 sm:p-6">
              <TutorialsComponent />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
