import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

export function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 bg-slate-50 text-center px-4">
      <Container>
        <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Thank You!
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Your eligibility form has been submitted successfully. One of our
          licensed agents will contact you shortly to discuss your options.
        </p>

        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="rounded-2xl min-w-[200px]"
        >
          Back to Home
        </Button>
      </Container>
    </div>
  );
}
