import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function FaqPage() {
  const faqs = [
    {
      question: 'How do I get started with FitTrack?',
      answer:
        'To get started with FitTrack, simply download our app from the App Store or Google Play Store, create an account, and start tracking your fitness activities. Our intuitive interface will guide you through the setup process.',
    },
    {
      question: 'Is FitTrack compatible with other fitness devices?',
      answer:
        'Yes, FitTrack is compatible with a wide range of fitness devices and smartwatches, including Apple Watch, Fitbit, Garmin, and more. You can connect your device in the app settings.',
    },
    {
      question: "How accurate is FitTrack's calorie tracking?",
      answer:
        'FitTrack uses advanced algorithms and data from your connected devices to provide highly accurate calorie tracking. However, for the most precise results, we recommend regularly updating your profile information and wearing your fitness device consistently.',
    },
    {
      question: 'Can I track my nutrition with FitTrack?',
      answer:
        'Yes, FitTrack offers comprehensive nutrition tracking. You can log your meals, scan barcodes, and even connect with popular nutrition apps for seamless data integration.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        "To cancel your subscription, go to the Account Settings in the app, select 'Subscription', and then choose 'Cancel Subscription'. If you have any issues, please contact our support team.",
    },
    {
      question: 'Is my data secure with FitTrack?',
      answer:
        'Absolutely. At FitTrack, we take your privacy and data security very seriously. We use industry-standard encryption and security measures to protect your personal information. For more details, please refer to our Privacy Policy.',
    },
    {
      question: 'Can I export my fitness data from FitTrack?',
      answer:
        "Yes, you can export your fitness data from FitTrack. Go to the Settings menu, select 'Data Export', choose the date range and data types you want to export, and you'll receive a downloadable file with your data.",
    },
    {
      question: 'Does FitTrack offer personalized workout plans?',
      answer:
        'Yes, FitTrack offers personalized workout plans based on your fitness level, goals, and preferences. These plans are available in our Pro and Elite subscription tiers.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
