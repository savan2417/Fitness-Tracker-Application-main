/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Activity, Heart, Trophy } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About FitTrack</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          FitTrack is your ultimate companion on your fitness journey. We
          believe that everyone deserves to live a healthy, active lifestyle,
          and our mission is to make that as easy and enjoyable as possible.
        </p>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              To empower individuals to take control of their health and fitness
              through innovative technology and personalized guidance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              A world where everyone has the tools and motivation to achieve
              their personal health and fitness goals.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Trophy className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              Innovation, Integrity, Inclusivity, and Empowerment guide
              everything we do at FitTrack.
            </CardContent>
          </Card>
        </div>
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2023, FitTrack was born out of a passion for health and
          technology. Our team of fitness enthusiasts and tech experts came
          together with a shared goal: to create a platform that makes fitness
          tracking not just easy, but enjoyable and motivating.
        </p>
        <p className="mb-4">
          We understand that every fitness journey is unique, which is why we've
          developed a comprehensive suite of tools that can be tailored to your
          individual needs and goals. Whether you're just starting out or you're
          a seasoned athlete, FitTrack is here to support you every step of the
          way.
        </p>
        <p>
          Join us in our mission to make the world a healthier place, one
          workout at a time. With FitTrack, your fitness goals are within reach.
        </p>
      </div>
    </div>
  );
}
