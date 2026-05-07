import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { CcpPolicy } from "./components/sections/CcpPolicy";
import { Testimonials } from "./components/sections/Testimonials";
import { DncPolicy } from "./components/sections/DncPolicy";
import { Contact } from "./components/sections/Contact";
import { TermsAndConditions } from "./components/sections/TermsAndConditions";
import { Footer } from "./components/sections/Footer";
import { ThankYou } from "./components/sections/ThankYou";
import { CallCta } from "./components/sections/CallCta";
import { MobileFloatingCta } from "./components/sections/MobileFloatingCta";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the path is /contact, scroll to the contact section
    if (pathname === "/contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (pathname === "/ccpa") {
      const el = document.getElementById("ccpa");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (pathname === "/dnc-policy") {
      const el = document.getElementById("dnc-policy");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-transparent">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileFloatingCta />
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <CcpPolicy />
      <Testimonials />
      <DncPolicy />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
          <Route path="/ccpa" element={<LandingPage />} />
          <Route path="/dnc-policy" element={<LandingPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/call" element={<CallCta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
