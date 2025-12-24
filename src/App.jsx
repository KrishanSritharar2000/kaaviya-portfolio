import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Linkedin,
  MapPin,
  Sparkles,
  Briefcase,
  GraduationCap,
  Shield,
  Code2,
  CalendarDays,
  Calendar,
} from "lucide-react";

function TypingAnimation({ text, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here (milliseconds)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-0.5 h-6 bg-indigo-600 ml-1"
      />
    </span>
  );
}

function DefaultCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const today = new Date();
  const nextWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 1);
    return date;
  });

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Select a Date & Time</h3>
        <p className="text-sm text-slate-600">Choose your preferred meeting slot</p>
      </div>

      {/* Date Selection */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-slate-700">Available Dates</h4>
        <div className="grid grid-cols-2 gap-2">
          {nextWeek.slice(0, 6).map((date, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDate(date)}
              className={`p-3 rounded-xl text-sm transition-all ${
                selectedDate?.toDateString() === date.toDateString()
                  ? "bg-green-100 border-2 border-green-500 text-green-800"
                  : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="font-medium">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="text-xs">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h4 className="text-sm font-medium text-slate-700">Available Times</h4>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.slice(0, 6).map((time, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-lg text-sm transition-all ${
                  selectedTime === time
                    ? "bg-green-100 border-2 border-green-500 text-green-800"
                    : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Contact Button */}
      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4"
        >
          <motion.a
            href={`mailto:kaaviya@example.com?subject=Meeting Request&body=Hi Kaaviya,%0D%0A%0D%0AI'd like to schedule a meeting for ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${selectedTime}.%0D%0A%0D%0APlease let me know if this works for you.%0D%0A%0D%0AThank you!`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Calendar className="h-4 w-4" />
            Request Meeting via Email
          </motion.a>
          <p className="text-xs text-slate-500 text-center mt-2">
            This will open your email client with pre-filled details
          </p>
        </motion.div>
      )}

      <div className="pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 text-center">
          This is a demo calendar. Set up your real Calendly link to enable direct booking.
        </p>
      </div>
    </div>
  );
}

function ScrollTypingAnimation({ text, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 60); // Slightly faster for section titles

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, isInView]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.8 }}
    >
      {displayText}
      {isInView && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-0.5 h-5 bg-indigo-600 ml-1"
        />
      )}
    </motion.span>
  );
}

/**
 * Kaaviya Paramalingam — Portfolio
 * Built from provided LinkedIn content (Finance BSc @ Bayes, Event Officer @ Bayes Entrepreneurship Club, Total Chi, Volunteer Police Cadet).
 *
 * Customize:
 * - Replace the placeholder images (see heroImage + galleryImages)
 * - Add CV PDF in /public/Kaaviya_Paramalingam_CV.pdf and update cvHref
 * - Update LinkedIn link if needed
 */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.34, 1.56, 0.64, 1] 
    } 
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

function Pill({ children, color = "default" }) {
  const colorClasses = {
    default: "border-slate-200 bg-white/70 text-slate-700 hover:bg-white",
    purple: "border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100/70 text-purple-800 hover:from-purple-100 hover:to-purple-150",
    blue: "border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/70 text-blue-800 hover:from-blue-100 hover:to-blue-150",
    green: "border-green-200 bg-gradient-to-r from-green-50 to-green-100/70 text-green-800 hover:from-green-100 hover:to-green-150",
    pink: "border-pink-200 bg-gradient-to-r from-pink-50 to-pink-100/70 text-pink-800 hover:from-pink-100 hover:to-pink-150",
    orange: "border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100/70 text-orange-800 hover:from-orange-100 hover:to-orange-150",
  };

  return (
    <motion.span 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm shadow-sm backdrop-blur transition-all duration-300 cursor-default ${colorClasses[color]}`}
    >
      {children}
    </motion.span>
  );
}

function Card({ icon: Icon, title, subtitle, children, right, gradient = "blue" }) {
  const gradients = {
    blue: "from-blue-400/20 via-cyan-300/15 to-indigo-400/20",
    purple: "from-purple-400/20 via-pink-300/15 to-indigo-400/20",
    green: "from-green-400/20 via-emerald-300/15 to-teal-400/20",
    orange: "from-orange-400/20 via-yellow-300/15 to-red-400/20",
    pink: "from-pink-400/20 via-rose-300/15 to-purple-400/20",
  };

  const iconColors = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    purple: "text-purple-600 bg-purple-50 border-purple-200",
    green: "text-green-600 bg-green-50 border-green-200",
    orange: "text-orange-600 bg-orange-50 border-orange-200",
    pink: "text-pink-600 bg-pink-50 border-pink-200",
  };

  return (
    <motion.div 
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-500 cursor-pointer"
    >
      <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-r ${gradients[gradient]} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      {/* Floating particles on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-8 right-12 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
      </div>
      
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            {Icon ? (
              <motion.span 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm ${iconColors[gradient]}`}
              >
                <Icon className="h-5 w-5" />
              </motion.span>
            ) : null}
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800 transition-colors">
              {title}
            </h3>
          </div>
          {subtitle ? (
            <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
              {subtitle}
            </p>
          ) : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      <div className="mt-4 text-slate-700 group-hover:text-slate-800 transition-colors relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-18">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-8"
      >
        {eyebrow ? (
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-indigo-50/80 px-4 py-2 text-sm font-medium text-purple-800 shadow-sm backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            {eyebrow}
          </motion.div>
        ) : null}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          <ScrollTypingAnimation 
            text={title}
            className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text"
          />
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        color: "#6366f1"
      }}
      whileTap={{ scale: 0.98 }}
      className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-all duration-300 relative group"
    >
      {children}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  // Replace these with real assets later:
  const heroImage = "/hero.jpg"; // put an image in /public/hero.jpg
  const galleryImages = useMemo(
    () => [
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg",
    ],
    []
  );

  const name = "Kaaviya Paramalingam";
  const headline = "Finance BSc Student at Bayes Business School";
  const location = "London Area, United Kingdom";
  const linkedinHref = "https://www.linkedin.com/in/kaaviya/"; // update if needed
  const cvHref = "/Kaaviya_Paramalingam_CV.pdf"; // add to /public
  const calendlyHref = "https://calendly.com/kaaviya"; // update with your actual Calendly link
  
  // Check if Calendly is properly configured (not the default placeholder)
  const isCalendlyConfigured = calendlyHref !== "https://calendly.com/kaaviya" && 
                               calendlyHref.includes('calendly.com/') && 
                               !calendlyHref.includes('example');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-slate-900 relative overflow-hidden">
      {/* Enhanced ambient background with floating elements */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Main gradient blobs */}
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-r from-indigo-300/30 via-purple-300/25 to-pink-300/30 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-sky-300/25 via-blue-300/20 to-cyan-300/25 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[20%] bottom-[-15%] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-violet-300/25 via-purple-300/20 to-indigo-300/25 blur-3xl" 
        />
        
        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/50 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/40 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -5, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400/60 rounded-full"
        />
      </div>

      {/* Enhanced top nav with gradient border */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 relative">
          <div className="flex h-16 items-center justify-between">
            <motion.a 
              href="#top" 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-sm group-hover:shadow-md transition-all overflow-hidden"
              >
                <img 
                  src="/logo.jpg" 
                  alt="KP Logo" 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if logo fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <span 
                  className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent h-full w-full items-center justify-center" 
                  style={{ display: 'none' }}
                >
                  KP
                </span>
              </motion.div>
              <div className="leading-tight">
                <div className="text-sm font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {name}
                </div>
                <div className="text-xs text-slate-500">Portfolio</div>
              </div>
            </motion.a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#leadership">Leadership</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href={linkedinHref}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/50 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm hover:shadow-md backdrop-blur transition-all duration-300 hover:bg-white/90"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-blue-600" />
                <span className="hidden sm:inline">LinkedIn</span>
              </motion.a>

              <motion.a
                href={cvHref}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                aria-label="Download CV"
                title="Download CV"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="h-4 w-4 relative z-10" />
                <span className="hidden sm:inline relative z-10">CV</span>
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      {/* Page */}
      <main id="top" className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Enhanced HERO Section */}
        <section className="py-14 md:py-20 relative">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-indigo-50/80 px-4 py-2 text-sm font-medium text-purple-800 shadow-sm backdrop-blur-sm"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles className="h-4 w-4 text-purple-600" />
                </motion.div>
                Final-year track • Finance • Leadership • Entrepreneurship
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-4xl md:text-5xl font-bold tracking-tight"
              >
                <TypingAnimation 
                  text={name}
                  className="bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent"
                />
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 text-lg text-slate-700"
              >
                <span className="font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  {headline}
                </span>
                <span className="mx-2 text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-indigo-500" />
                  {location}
                </span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 max-w-xl text-slate-700 leading-relaxed"
              >
                Finance student at Bayes Business School with hands-on leadership experience in
                delivering high-impact entrepreneurship events — combining analytical thinking,
                strong communication, and a focus on creating real-world outcomes.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href="#experience"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 35px -5px rgba(99, 102, 241, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">View Experience</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/50 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur hover:shadow-md hover:bg-white/90 transition-all duration-300"
                >
                  Get in touch
                </motion.a>

                <motion.div 
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="flex items-center gap-2"
                >
                  <Pill color="blue">Finance</Pill>
                  <Pill color="purple">Event Strategy</Pill>
                  <Pill color="green">Python</Pill>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Hero image card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative perspective-1000"
            >
              <motion.div 
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: 5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="transform-gpu"
              >
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-r from-indigo-300/30 via-purple-300/30 to-pink-300/30 blur-2xl opacity-75" />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
                      "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
                      "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
                      "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[28px] border border-white/30 bg-white/80 shadow-2xl backdrop-blur-sm"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white relative">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0">
                      <motion.div
                        animate={{
                          background: [
                            "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
                          ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full"
                      />
                    </div>
                    
                    <img
                      src={heroImage}
                      alt="Kaaviya portrait placeholder"
                      className="h-full w-full object-cover relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                      onLoad={(e) => {
                        e.currentTarget.nextElementSibling.style.display = "none";
                      }}
                    />
                    <div className="flex h-full w-full items-center justify-center p-8 relative z-10 absolute inset-0" style={{ display: 'none' }}>
                      <div className="text-center">
                        <motion.div 
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1,
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)"
                          }}
                          transition={{ duration: 0.6 }}
                          className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/50 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg backdrop-blur-sm"
                        >
                          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            KP
                          </span>
                        </motion.div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">
                          Add <span className="font-bold text-indigo-600">/public/hero.jpg</span> for a portrait
                        </p>
                        <p className="text-xs text-slate-500">
                          (Optional — this layout still looks premium without it)
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-6"
                  >
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-2xl border border-indigo-200/50 bg-gradient-to-br from-indigo-50 to-blue-50 p-3 cursor-default"
                      >
                        <div className="text-xs text-indigo-600 font-medium">Focus</div>
                        <div className="mt-1 text-sm font-bold text-indigo-800">Finance</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50 to-pink-50 p-3 cursor-default"
                      >
                        <div className="text-xs text-purple-600 font-medium">Strength</div>
                        <div className="mt-1 text-sm font-bold text-purple-800">Leadership</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-3 cursor-default"
                      >
                        <div className="text-xs text-green-600 font-medium">Tools</div>
                        <div className="mt-1 text-sm font-bold text-green-800">Python</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Small gallery strip */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
                </div>
                <div className="aspect-[16/10] bg-slate-100 relative">
                  <img
                    src={src}
                    alt="Gallery placeholder"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.nextElementSibling.style.display = "none";
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center p-6 absolute inset-0" style={{ display: 'none' }}>
                    <p className="text-xs text-slate-500">
                      Add <span className="font-semibold">{src}</span> in /public for images
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="About" title="A finance student with a leadership edge">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="leading-relaxed text-slate-700">
                I’m a <span className="font-semibold text-slate-900">Finance BSc student</span> at
                Bayes Business School (City, University of London). I enjoy combining structured,
                analytical thinking with real-world execution — especially in fast-moving, collaborative environments.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Alongside my studies, I’ve supported student entrepreneurship through event delivery,
                stakeholder collaboration, and community engagement — including a Dragons’ Den-style pitching competition.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Interpersonal Communication</Pill>
                <Pill>Community Engagement</Pill>
                <Pill>Stakeholder Collaboration</Pill>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">What I’m aiming for</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                I’m interested in opportunities where I can keep learning and contribute meaningful value —
                leveraging finance foundations, clear communication, and a bias toward action.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Strength</div>
                  <div className="mt-1 text-sm font-semibold">Organising & delivering</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Style</div>
                  <div className="mt-1 text-sm font-semibold">Calm, consistent, reliable</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Interest</div>
                  <div className="mt-1 text-sm font-semibold">Entrepreneurship</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Tooling</div>
                  <div className="mt-1 text-sm font-semibold">Python foundations</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="Experience" title="Work, roles & impact">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="grid gap-6"
          >
            <motion.div variants={fadeUp}>
              <Card
                icon={Briefcase}
                title="Event Officer — Bayes Entrepreneurship Club"
                subtitle="Sep 2024 – Jul 2025 • London • On-site"
                gradient="blue"
                right={
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700">
                    +30% attendance
                  </div>
                }
              >
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Organised and executed multiple high-impact events, including a{" "}
                    <span className="font-semibold text-slate-900">Dragon’s Den-style pitching competition</span>{" "}
                    and sessions for women entrepreneurs.
                  </li>
                  <li>
                    Collaborated with diverse stakeholders to create inspiring experiences that fostered
                    entrepreneurial spirit at Bayes.
                  </li>
                  <li>
                    Achieved a <span className="font-semibold text-slate-900">30% increase</span> in event attendance
                    through targeted marketing and community engagement strategies.
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card
                icon={Briefcase}
                title="Team Member (Part-time) — Total Chi"
                subtitle="May 2023 – Sep 2024 • London • On-site"
                gradient="green"
              >
                <ul className="list-disc pl-5 space-y-2">
                  <li>Worked as part of an on-site team in a customer-facing environment.</li>
                  <li>Strengthened communication, reliability, and time-management alongside studies.</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card
                icon={CalendarDays}
                title="Finance Student — Bayes Business School"
                subtitle="Sep 2022 – Present • London"
                gradient="purple"
              >
                <p className="leading-relaxed">
                  Studying finance while developing strong foundations in analytical thinking, communication,
                  and collaborative problem-solving.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* LEADERSHIP */}
        <Section id="leadership" eyebrow="Leadership & service" title="Beyond the classroom">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <Card
                icon={Sparkles}
                title="Committee Contribution — Pitch to Potential"
                subtitle="Bayes Entrepreneurship Club • Dragons’ Den-style pitching competition"
              >
                <p className="leading-relaxed">
                  Supported the delivery of a flagship Bayes entrepreneurship event, helping create a smooth,
                  high-energy experience for student founders, judges, and attendees.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card
                icon={Shield}
                title="Volunteer Police Cadet — Metropolitan Police"
                subtitle="Sep 2018 – Jun 2020"
                gradient="orange"
              >
                <p className="leading-relaxed">
                  Volunteered as a police cadet, developing discipline, responsibility, teamwork, and community-mindedness.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="Skills" title="Tools & strengths">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <motion.div variants={fadeUp}>
              <Card icon={Code2} title="Technical" subtitle="Growing toolkit" gradient="green">
                <div className="flex flex-wrap gap-2">
                  <Pill color="green">Python</Pill>
                  <Pill color="blue">Data Analysis (Foundations)</Pill>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card icon={Sparkles} title="Professional" subtitle="How I work" gradient="purple">
                <div className="flex flex-wrap gap-2">
                  <Pill color="purple">Interpersonal Communication</Pill>
                  <Pill color="pink">Stakeholder Collaboration</Pill>
                  <Pill color="blue">Community Engagement</Pill>
                  <Pill color="orange">Event Coordination</Pill>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card icon={Briefcase} title="Core focus" subtitle="Finance & leadership" gradient="orange">
                <div className="flex flex-wrap gap-2">
                  <Pill color="blue">Finance</Pill>
                  <Pill color="purple">Leadership</Pill>
                  <Pill color="green">Organisation</Pill>
                  <Pill color="pink">Teamwork</Pill>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="Education" title="Academic background">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <Card
                icon={GraduationCap}
                title="Bayes Business School (City, University of London)"
                subtitle="BSc Finance • 2022 – 2026"
                gradient="blue"
              >
                <p className="leading-relaxed">
                  Finance BSc with emphasis on analytical thinking, communication, and practical application.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card
                icon={GraduationCap}
                title="Watford Grammar School for Girls"
                subtitle="2015 – 2022 • A-Levels: Maths, Economics, Psychology • Grade: A*AC"
                gradient="green"
              >
                <p className="leading-relaxed">
                  Strong quantitative and economic foundations alongside psychological understanding of behaviour.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="Contact" title="Let’s connect">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Open to conversations & opportunities</h3>
                <p className="mt-2 text-slate-700">
                  Based in {location}. Connect via LinkedIn or download my CV directly.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <motion.a
                  href={linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md backdrop-blur transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-left">Connect on LinkedIn</div>
                    <div className="text-xs text-slate-500">Professional networking</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href={cvHref}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-4 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="h-5 w-5 relative z-10" />
                  <div className="relative z-10 text-left">
                    <div>Download CV</div>
                    <div className="text-xs text-white/80">Full resume & portfolio</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Calendly Widget */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur overflow-hidden"
            >
              <div className="mb-4 px-3">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Schedule a Call
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {isCalendlyConfigured 
                    ? "Book a time that works for both of us to discuss opportunities."
                    : "Choose a preferred time and we'll coordinate via email."
                  }
                </p>
              </div>
              
              {/* Calendly Inline Widget or Default Calendar */}
              {isCalendlyConfigured ? (
                <div className="relative">
                  <iframe
                    src={`${calendlyHref}?embed_domain=localhost&embed_type=Inline`}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    className="rounded-2xl"
                    title="Schedule a meeting with Kaaviya"
                  />
                  
                  {/* Calendly loading fallback */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="mx-auto mb-3 h-8 w-8 border-2 border-green-600 border-t-transparent rounded-full"
                      />
                      <p className="text-sm text-green-700 font-medium">Loading calendar...</p>
                      <p className="text-xs text-green-600 mt-1">
                        If this doesn't load, visit{" "}
                        <a 
                          href={calendlyHref}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-green-800"
                        >
                          my Calendly page
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl border border-green-100">
                  <DefaultCalendar />
                </div>
              )}
            </motion.div>
          </motion.div>
        </Section>

        {/* FOOTER */}
        <footer className="pb-10 pt-4 text-center text-xs text-slate-500">
          © {year} {name}. Built with React + Tailwind.
        </footer>
      </main>
    </div>
  );
}
