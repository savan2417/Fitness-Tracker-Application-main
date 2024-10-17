/* eslint-disable react/no-unescaped-entities */
export function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to FitTrack's Privacy Policy. This policy describes how
            FitTrack ("we", "our", or "us") collects, uses, and shares your
            personal information when you use our fitness tracking application
            and related services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, update your profile, or contact us for support.
            This may include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Name and contact information</li>
            <li>Demographic information</li>
            <li>Health and fitness data</li>
            <li>Device and usage information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about our services</li>
            <li>Analyze usage patterns and trends</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Partners with whom you've connected your FitTrack account</li>
            <li>
              Law enforcement or other parties when required by law or to
              protect our rights
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Your Choices</h2>
          <p>
            You can access, update, or delete your account information at any
            time through the FitTrack app. You may also contact us to request
            access to, correction of, or deletion of any personal information
            that you have provided to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Security</h2>
          <p>
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, unauthorized access,
            disclosure, alteration, and destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page
            and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at privacy@fittrack.com.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-8">Last Updated: June 1, 2023</p>
      </div>
    </div>
  );
}
