import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Check } from 'lucide-react';

export function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      description: 'Get started with basic fitness tracking',
      features: [
        'Activity tracking',
        'Basic workout analytics',
        'Goal setting',
        'Mobile app access',
      ],
    },
    {
      name: 'Pro',
      price: '$9.99',
      description: 'Advanced features for dedicated fitness enthusiasts',
      features: [
        'All Basic features',
        'Heart rate monitoring',
        'Detailed workout analytics',
        'Personalized workout plans',
        'Sleep analysis',
      ],
    },
    {
      name: 'Elite',
      price: '$19.99',
      description: 'Comprehensive fitness solution for athletes',
      features: [
        'All Pro features',
        'Advanced performance metrics',
        '1-on-1 coaching sessions',
        'Nutrition planning',
        'Priority support',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        Select the plan that best fits your fitness goals and lifestyle. Upgrade
        or downgrade at any time.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={index === 1 ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {index === 0 ? 'Get Started' : 'Subscribe Now'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
