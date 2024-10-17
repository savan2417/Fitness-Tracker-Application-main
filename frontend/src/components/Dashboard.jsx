import { useState } from 'react';
import { useDashboard } from '../hooks/useDashboard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Activity, Flame, Dumbbell, TrendingUp } from 'lucide-react';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardComponent() {
  const [timeRange, setTimeRange] = useState('week');
  const { dashboardData, isLoading, error } = useDashboard(timeRange);

  const {
    workoutData = [],
    calorieData = [],
    workoutTypeData = [],
    totalWorkouts = 0,
    caloriesBurned = 0,
    activeMinutes = 0,
    progress = 0,
  } = dashboardData || {};

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="p-2 sm:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Select
          onValueChange={(value) => setTimeRange(value)}
          defaultValue={timeRange}
        >
          <SelectTrigger className="w-[180px] bg-black text-white border border-transparent rounded-lg shadow-md hover:bg-gray-800 duration-300 ease-in-out">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last Week</SelectItem>
            <SelectItem value="month">Last Month</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Workouts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Workouts
            </CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWorkouts}</div>
          </CardContent>
        </Card>

        {/* Calories Burned */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Calories Burned
            </CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caloriesBurned}</div>
            <p className="text-xs text-muted-foreground">
              {caloriesBurned > 6000
                ? 'You are doing great!'
                : `Spend at least ${6000 - caloriesBurned} more calories!`}
            </p>
          </CardContent>
        </Card>

        {/* Active Minutes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Minutes
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeMinutes}</div>
            <p className="text-xs text-muted-foreground">
              {activeMinutes > 180
                ? 'You are doing great!'
                : `Spend at least ${180 - activeMinutes} more minutes!`}
            </p>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress}%</div>
            <p className="text-xs text-muted-foreground">
              {totalWorkouts > 30
                ? 'Goal achieved!'
                : `${30 - totalWorkouts} workouts left to achieve goal!`}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Workout Duration Bar Chart */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Workout Duration</CardTitle>
            <CardDescription>Daily workout duration in minutes</CardDescription>
          </CardHeader>
          <CardContent className="pl-0 pr-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="duration" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Calories Burned Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Calories Burned</CardTitle>
            <CardDescription>Daily calories burned</CardDescription>
          </CardHeader>
          <CardContent className="pl-0 pr-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={calorieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Workout Type Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Workout Types</CardTitle>
          <CardDescription>Distribution of workout types</CardDescription>
        </CardHeader>
        <CardContent className="pl-0 pr-2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={workoutTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {workoutTypeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
