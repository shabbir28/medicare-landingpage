import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Link } from "react-router-dom";

const PHONE_DISPLAY = "+1 (573) 370-0030";
const PHONE_TEL = "+15733700030";

export function CallCta() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 bg-gradient-to-br from-surface-50 to-surface-100 text-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-200/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent-200/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
      </div>

      <Container className="relative z-10 flex justify-center">
        <Card className="w-full max-w-md p-8 md:p-10 shadow-lift ring-1 ring-slate-200/60 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-brand-100">
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
          
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Speak to a Specialist
          </h1>
          
          <p className="text-sm md:text-base text-slate-600 mb-8 font-medium">
            Don't navigate Medicare alone. Tap below to connect instantly with a licensed agent for clear, honest guidance.
          </p>
          
          <div className="flex flex-col gap-3">
            <a href={`tel:${PHONE_TEL}`} className="w-full block group">
              <Button
                size="lg"
                className="w-full h-14 rounded-xl bg-brand-900 hover:bg-brand-800 text-white shadow-soft px-6 text-base font-extrabold transition-all group-hover:scale-[1.02]"
              >
                Call {PHONE_DISPLAY}
              </Button>
            </a>
            
            <Link
              to="/"
              className="w-full h-14 rounded-xl bg-surface-50 hover:bg-surface-100 text-slate-700 ring-1 ring-slate-200/70 px-6 text-sm font-bold transition-all flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
          
          <p className="mt-6 text-xs text-slate-500 font-medium">
            No wait times • No automated mazes
          </p>
        </Card>
      </Container>
    </div>
  );
}
