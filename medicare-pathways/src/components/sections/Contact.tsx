import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../motion";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import contactImg from "../../assets/Medicare 30.jpg.jpeg";
import type { ReactNode } from "react";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "h-12 w-full rounded-2xl bg-surface-50 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400";

export function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    currentCoverage: "",
    householdIncome: "",
    phone: "",
    email: "",
    zipCode: "",
    state: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (status !== "loading" && status !== "idle") {
      setStatus("idle");
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        phone: formData.phone.startsWith("+")
          ? `'${formData.phone}`
          : formData.phone,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbzKWPP5MeOU9cug6h_hP2SOhxGXxYZjVrmBUxpTJlXFUYCOGU5XtEpl0zUxEzsj9_ZcUg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(submissionData),
        },
      );

      setStatus("success");

      setFormData({
        fullName: "",
        age: "",
        gender: "",
        currentCoverage: "",
        householdIncome: "",
        phone: "",
        email: "",
        zipCode: "",
        state: "",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white md:bg-white md:py-18 lg:py-20 h-[150vh] md:h-auto"
    >
      <div className="sticky top-0 z-40 h-[100dvh] w-full overflow-y-auto bg-white py-14 md:static md:h-auto md:overflow-visible md:py-0">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Eligibility Checker
            </h2>

            <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
              Fill out the form below to check plan eligibility. All fields are
              required.
            </p>
          </motion.div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              className="h-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-0">
                  <img
                    src={contactImg}
                    alt="Friendly healthcare support"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-accent-400" />
                      Trusted, clear guidance
                    </div>

                    <div className="mt-3 text-lg font-extrabold text-white md:text-xl">
                      Professional support, without the pressure
                    </div>

                    <div className="mt-1 text-sm text-white/80">
                      We keep it simple: clear next steps and answers you can
                      trust.
                    </div>

                    <div className="mt-4 flex flex-col gap-2 relative z-10">
                      <a
                        href="mailto:info@easymedicareplanz.com"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white group"
                      >
                        info@easymedicareplanz.com
                      </a>

                      <div className="inline-flex items-start gap-2 text-sm font-semibold text-brand-300 hover:text-white transition">
                        <span>
                          14 Hartland Ave,
                          <br />
                          Huntington Station, NY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            >
              <Card className="p-6 md:p-7">
                <form className="grid gap-5" onSubmit={handleSubmit}>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <Field label="Name">
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., Sarah Khan"
                        autoComplete="name"
                        required
                      />
                    </Field>

                    <Field label="Age">
                      <input
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., 65"
                        inputMode="numeric"
                        min={0}
                        required
                      />
                    </Field>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <Field label="Gender">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        <option value="" disabled>
                          Select gender
                        </option>

                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>

                    <Field label="Current Coverage">
                      <select
                        name="currentCoverage"
                        value={formData.currentCoverage}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        <option value="" disabled>
                          Select option
                        </option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Field>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <Field label="Household Income">
                      <input
                        name="householdIncome"
                        type="number"
                        value={formData.householdIncome}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., 50000"
                        inputMode="numeric"
                        min={0}
                        required
                      />
                    </Field>

                    <Field label="Phone Number">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., +1 (573) 370 0030"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                      />
                    </Field>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <Field label="Email">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., sarah@email.com"
                        inputMode="email"
                        autoComplete="email"
                        type="email"
                        required
                      />
                    </Field>

                    <Field label="ZIP Code">
                      <input
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., 10001"
                        inputMode="numeric"
                        required
                      />
                    </Field>

                  </div>

                  <Field label="State">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="" disabled>
                        Select state
                      </option>

                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-2">

                    <div className="text-xs text-slate-500">
                      By submitting, you agree to be contacted about plan
                      options.
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-2xl min-w-[120px] relative"
                      disabled={status === "loading"}
                    >
                      {status === "loading"
                        ? "Sending..."
                        : "Check Eligibility"}
                    </Button>

                  </div>

                  {status === "error" && (
                    <div className="mt-1 text-sm font-semibold text-red-600 bg-red-50 rounded-2xl p-3 text-center ring-1 ring-red-200">
                      Something went wrong. Please try again.
                    </div>
                  )}

                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}