import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const PHONE_DISPLAY = "+1 (573) 370-0030";

export function MobileFloatingCta() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Show CTA 1 second after scrolling
  useEffect(() => {
    if (hasScrolled) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[55] bg-slate-900/40 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed bottom-0 left-0 right-0 z-[60] md:hidden pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Card className="w-full p-6 md:p-8 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/60 bg-white rounded-t-3xl rounded-b-none border-b-0">
                <div className="mx-auto w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm ring-1 ring-brand-100">
                  <div className="relative">
                    <span className="absolute -inset-1 animate-ping rounded-full bg-brand-400 opacity-20"></span>
                    <svg
                      className="w-8 h-8 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2 text-center">
                  Speak to a Specialist
                </h2>
                
                <p className="text-sm text-slate-600 mb-6 font-medium text-center">
                  Don't navigate Medicare alone. Connect instantly with a licensed agent for clear, honest guidance.
                </p>
                
                <Link to="/call" className="w-full block group">
                  <Button
                    size="lg"
                    className="w-full h-14 rounded-xl bg-brand-900 hover:bg-brand-800 text-white shadow-soft px-6 text-base font-extrabold transition-all group-hover:scale-[1.02]"
                  >
                    Call {PHONE_DISPLAY}
                  </Button>
                </Link>
                
                <p className="mt-5 text-xs text-slate-500 font-medium text-center">
                  No wait times • No automated mazes
                </p>
              </Card>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
