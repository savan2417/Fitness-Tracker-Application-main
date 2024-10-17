import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// Pages and Components
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import { LoginPage } from './pages/login-page';
import { SignupPage } from './pages/signup-page';
import Navbar2 from './components/Navbar2';
import { BlogProvider } from './contexts/BlogContext';
import { PricingPage } from './pages/pricing-page';
import { AboutPage } from './pages/about-page';
import { FeaturesPage } from './pages/features-page';
import { ContactUsPage } from './pages/contact-us-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { TermsOfServicePage } from './pages/terms-of-service-page';
import Footer from './components/footer';
import { LogoutPage } from './pages/logout-page';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar2 />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <BlogProvider>
                    <HomePage />
                  </BlogProvider>
                ) : (
                  <Navigate to="/landing" />
                )
              }
            />
            <Route
              path="/landing"
              element={!user ? <LandingPage /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              path="/logout"
              element={user ? <LogoutPage /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignupPage /> : <Navigate to="/" />}
            />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
