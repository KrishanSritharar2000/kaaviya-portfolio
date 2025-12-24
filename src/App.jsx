import React, { useMemo } from "react";
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
} from "lucide-react";

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
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur hover:bg-white transition">
      {children}
    </span>
  );
}

function Card({ icon: Icon, title, subtitle, children, right }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {Icon ? (
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <Icon className="h-4 w-4 text-slate-700" />
              </span>
            ) : null}
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          </div>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      <div className="mt-4 text-slate-700">{children}</div>
    </div>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
    >
      {children}
    </a>
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute left-[20%] bottom-[-15%] h-[520px] w-[520px] rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                <span className="text-sm font-semibold text-slate-800">KP</span>
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-xs text-slate-600">Portfolio</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#leadership">Leadership</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow-md transition"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={cvHref}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:shadow-md hover:bg-slate-800 transition"
                aria-label="Download CV"
                title="Download CV"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page */}
      <main id="top" className="mx-auto max-w-6xl px-4 md:px-6">
        {/* HERO */}
        <section className="py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Final-year track • Finance • Leadership • Entrepreneurship
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                {name}
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                <span className="font-medium text-slate-900">{headline}</span>
                <span className="mx-2 text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {location}
                </span>
              </p>

              <p className="mt-5 max-w-xl text-slate-700 leading-relaxed">
                Finance student at Bayes Business School with hands-on leadership experience in
                delivering high-impact entrepreneurship events — combining analytical thinking,
                strong communication, and a focus on creating real-world outcomes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:bg-indigo-500 transition"
                >
                  View Experience <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur hover:shadow-md transition"
                >
                  Get in touch
                </a>

                <div className="flex items-center gap-2">
                  <Pill>Finance</Pill>
                  <Pill>Event Strategy</Pill>
                  <Pill>Python</Pill>
                </div>
              </div>
            </motion.div>

            {/* Hero image card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-indigo-200/50 via-sky-200/30 to-violet-200/50 blur-xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  {/* Put /public/hero.jpg for a real photo; otherwise this still looks fine */}
                  <img
                    src={heroImage}
                    alt="Kaaviya portrait placeholder"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <span className="text-base font-semibold text-slate-800">KP</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        Add <span className="font-semibold">/public/hero.jpg</span> for a portrait
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        (Optional — this layout still looks premium without it)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-3">
                      <div className="text-xs text-slate-500">Focus</div>
                      <div className="mt-1 text-sm font-semibold">Finance</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-3">
                      <div className="text-xs text-slate-500">Strength</div>
                      <div className="mt-1 text-sm font-semibold">Leadership</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-3">
                      <div className="text-xs text-slate-500">Tools</div>
                      <div className="mt-1 text-sm font-semibold">Python</div>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="aspect-[16/10] bg-slate-100">
                  <img
                    src={src}
                    alt="Gallery placeholder"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center p-6">
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
              <Card icon={Code2} title="Technical" subtitle="Growing toolkit">
                <div className="flex flex-wrap gap-2">
                  <Pill>Python</Pill>
                  <Pill>Data Analysis (Foundations)</Pill>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card icon={Sparkles} title="Professional" subtitle="How I work">
                <div className="flex flex-wrap gap-2">
                  <Pill>Interpersonal Communication</Pill>
                  <Pill>Stakeholder Collaboration</Pill>
                  <Pill>Community Engagement</Pill>
                  <Pill>Event Coordination</Pill>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card icon={Briefcase} title="Core focus" subtitle="Finance & leadership">
                <div className="flex flex-wrap gap-2">
                  <Pill>Finance</Pill>
                  <Pill>Leadership</Pill>
                  <Pill>Organisation</Pill>
                  <Pill>Teamwork</Pill>
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
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Open to conversations & opportunities</h3>
                <p className="mt-2 text-slate-700">
                  Based in {location}. Connect via LinkedIn or share a CV directly.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md transition"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={cvHref}
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:bg-slate-800 transition"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
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
