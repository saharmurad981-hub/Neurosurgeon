import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import All from "../assets/images";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Activity,
  HeartHandshake,
  ShieldCheck,
  MessagesSquare,
  ClipboardCheck,
  CalendarDays,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every consultation should consider the patient's concerns, questions, and individual needs.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description:
      "Patients deserve understandable explanations and the opportunity to discuss their care.",
  },
  {
    icon: ShieldCheck,
    title: "Thoughtful Decisions",
    description:
      "Care decisions should be based on appropriate clinical assessment and discussion of available options.",
  },
];

const careAreas = [
  {
    icon: Brain,
    number: "01",
    title: "Neurosurgery",
    description:
      "Consultation and assessment for concerns involving the brain and nervous system.",
  },
  {
    icon: Activity,
    number: "02",
    title: "Spine Care",
    description:
      "Assessment of spine-related concerns and discussion of appropriate next steps.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Follow-up Visits",
    description:
      "Follow-up consultations to review progress and discuss the ongoing care plan.",
  },
];

const journey = [
  {
    number: "01",
    title: "Request an Appointment",
    description:
      "Choose a preferred consultation time and share your contact details.",
  },
  {
    number: "02",
    title: "Meet the Doctor",
    description:
      "Discuss your concerns and share relevant medical information during your consultation.",
  },
  {
    number: "03",
    title: "Understand Your Options",
    description:
      "Discuss the assessment, possible next steps, and any recommended follow-up.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
      <span className="h-px w-7 bg-orange-300" />
      {children}
    </span>
  );
}

export default function About() {

    const { t } = useTranslation();
  return (
    <main className="overflow-hidden bg-white text-gray-900">
      {/* 01. HERO */}
      <section className="relative isolate min-h-[650px] bg-blue-600">
        <div className="absolute inset-0 -z-10">
          <img
            src={All.zadran}
            alt="Medical consultation environment"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40  via-blue-300 to-white" />
        </div>

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>About the Doctor</SectionLabel>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Care begins with{" "}
              <span className="text-blue-700">understanding.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Get to know Dr. Khalid Khan Zadran and learn about
              the approach to consultation, communication, and care
              for brain and spine concerns.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Book Appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#doctor-intro"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover More
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-white/65">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Neurosurgery & Spine Care
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[3rem] border-r-2 border-t-2 border-blue-700 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
              <img
                src={All.zadran }
                alt="Dr. Khalid Khan Zadran"
                className="h-[400px] w-full rounded-[1.5rem] object-cover sm:h-[470px]"
              />

              <div className="absolute inset-x-6  bottom-6 rounded-2xl border border-white/20  bg-blue-400/90 p-5 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-200">
                  Meet Your Doctor
                </p>
                <h2 className="mt-2 text-xl font-bold">
                  Dr. Khalid Khan Zadran
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Neurosurgery & Spine Care
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-bl-[3rem] border-b-2 border-l-2 border-white" />
          </motion.div>
        </div>
      </section>

      {/* 02. DOCTOR INTRODUCTION */}
      <section
        id="doctor-intro"
        className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-tl-[3rem] bg-blue-100" />
            <img
              src={All.hero}
              alt="Doctor consultation setting"
              className="relative h-[420px] w-full rounded-[2rem] object-cover sm:h-[520px]"
            />

            <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl bg-white p-5 shadow-xl sm:right-8">
              <Stethoscope className="text-blue-600" size={28} />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Focused on listening and understanding
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Meet the Doctor</SectionLabel>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              A thoughtful approach to{" "}
              <span className="text-blue-600">brain and spine care.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Dr. Khalid Khan Zadran sees patients at Rifah Medical
              Complex, Kabul. This page introduces his practice and
              helps patients understand what to expect when requesting
              a consultation.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              A good consultation begins with listening, reviewing
              relevant information, and discussing appropriate options
              in language the patient can understand.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Time to discuss your concerns",
                "Clear explanations of next steps",
                "Respectful communication throughout your visit",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="/appointment"
              className="mt-9 inline-flex items-center gap-3 font-semibold text-blue-600 transition hover:text-white"
            >
              Request a Consultation <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 03. PHILOSOPHY */}
      <section className="bg-blue-50 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
              The principles behind every conversation.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              A considerate patient experience is built on respect,
              communication, and informed discussions.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                 
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. AREAS OF CARE */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Areas of Care</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
                Support for your next step.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-600">
              Explore the consultation categories below. Actual
              availability and treatments should be confirmed directly
              with the clinic.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {careAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-gray-200 p-7 sm:p-9"
                >
                  <span className="absolute right-6 top-4 text-6xl font-bold text-gray-100">
                    {item.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-8 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-20 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>

                    <a
                      href="/appointment"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-orange-600"
                    >
                      Request a Visit <ArrowRight size={17} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05. PATIENT JOURNEY */}
      <section className="bg-blue-700 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>Your Patient Journey</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              Know what to expect before you arrive.
            </h2>
            <p className="mt-5 leading-7 text-white/65">
              A simple overview helps patients prepare for their
              consultation and understand the next steps.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {journey.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="border-t border-white/20 pt-6"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-orange-400">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/70">
            Please bring relevant medical records or previous test
            results to your consultation when available. For a medical
            emergency, seek urgent medical care rather than waiting for
            an online appointment.
          </div>
        </div>
      </section>

      {/* 06. LOCATION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-blue-100 bg-blue-50/70 p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <SectionLabel>Visit the Clinic</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Start with a conversation.
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Rifah Medical Complex, Kabul
            </p>
          </div>

          <a
            href="/appointment"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <CalendarDays size={19} />
            Book an Appointment
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}


