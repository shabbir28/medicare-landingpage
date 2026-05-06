import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoBadge } from "./LogoBadge";
import { Container } from "./ui/Container";
import { cn } from "./ui/cn";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Plans", href: "#plans" },
  { label: "CCPA", href: "#ccpa" },
  { label: "DNC Policy", href: "#dnc-policy" },
  { label: "Check Eligibility", href: "#contact" },
];

const PHONE_DISPLAY = "+1 (573) 370-0030";
const PHONE_TEL = "+15733700030";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar shadow/blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-md backdrop-blur-md"
          : "border-slate-200/40 bg-white/80 backdrop-blur",
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group w-48 shrink-0">
          <LogoBadge size="sm" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-brand-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-900 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-4 py-2 text-sm font-extrabold text-white shadow-soft transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
            {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-200 transition hover:bg-surface-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <div className="grid gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-slate-800" />
            <span className="h-0.5 w-5 rounded-full bg-slate-800" />
            <span className="h-0.5 w-5 rounded-full bg-slate-800" />
          </div>
        </button>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 cursor-default bg-slate-950/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[84%] max-w-sm bg-white shadow-lift"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="flex h-16 items-center justify-between px-4">
                <a href="#home" className="flex items-center group w-40 shrink-0" onClick={() => setOpen(false)}>
                  <LogoBadge size="sm" />
                </a>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-200 transition hover:bg-surface-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-4 pb-6 pt-2">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition",
                        "hover:bg-surface-100",
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-900 px-4 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
