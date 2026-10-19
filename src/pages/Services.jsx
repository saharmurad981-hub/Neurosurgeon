import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Activity,
  ClipboardCheck,
  ScanSearch,
  MessagesSquare,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  ShieldCheck,
  Clock3,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Brain,
    title: "Neurosurgery Consultation",
   
    description:
      "A consultation to discuss neurological concerns, review relevant medical information, and understand appropriate next steps.",
    details: [
      "Discuss symptoms and concerns",
      "Review relevant medical records",
      "Discuss whether further assessment is needed",
    ],
  },
  {
    number: "02",
    icon: Activity,
    title: "Spine Consultation",
  
    description:
      "Assessment of spine-related concerns, with a discussion of available care options based on the patient's clinical situation.",
    details: [
      "Discuss back and neck concerns",
      "Review previous scans or reports when available",
      "Discuss appropriate next steps",
    ],
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Medical Report Review",
  
    description:
      "Review of relevant medical reports and imaging that a patient brings to the consultation, when appropriate.",
    details: [
      "Bring relevant previous reports",
      "Discuss findings with the doctor",
      "Ask questions about the next steps",
    ],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Follow-up Consultation",
    
    description:
      "A follow-up visit to discuss progress, review previously agreed plans, and determine whether further assessment is appropriate.",
    details: [
      "Review progress since the last visit",
      "Discuss ongoing concerns",
      "Review the recommended follow-up plan",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Request a Visit",
    description:
      "Choose your preferred consultation and submit your contact details.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Meet the Doctor",
    description:
      "Explain your concerns and share relevant medical history or reports.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Discuss Your Options",
    description:
      "Discuss the assessment and appropriate next steps with the doctor.",
    icon: MessagesSquare,
  },
];

const faqs = [
  {
    question: "What should I bring to my consultation?",
    answer:
      "Bring relevant previous medical reports, imaging results, a list of current medicines, and any referral documents you have.",
  },
  {
    question: "How can I request an appointment?",
    answer:
      "Use the Book Appointment button to submit your preferred date and contact information. The clinic should confirm the actual appointment time.",
  },
  {
    question: "Is my appointment confirmed immediately?",
    answer:
      "Not necessarily. Submitting a request does not guarantee availability. Wait for confirmation from the clinic before treating the visit as booked.",
  },
  {
    question: "Can I discuss which service I need?",
    answer:
      "Yes. If you are unsure which consultation to choose, contact the clinic for guidance. A clinician can help determine the appropriate assessment.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
      <span className="h-px w-7 bg-orange-500 " />
      {children}
    </span>
  );
}

export default function Services() {
 


  const [expandedService, setExpandedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white text-gray-900">
      {/* 01. HERO */}
      <section className="relative isolate overflow-hidden bg-blue-600">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel >Our Services</SectionLabel>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Understanding care.
              <span className="mt-2 block text-blue-100">
                Thoughtful next steps.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Explore consultation services related to brain and spine
              concerns, and learn what to expect when visiting
              Dr. Khalid Khan Zadran.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Request Appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#our-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Rifah Medical Complex, Kabul
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] border border-white/55" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/66 bg-blue-600 p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Care & Consultation
                </span>
                <ShieldCheck className="text-orange-300" size={24} />
              </div>

              <div className="my-8 flex items-center justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border border-blue-200/20 bg-blue-200/5 sm:h-60 sm:w-60">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-blue-200/30 bg-blue-200/10 sm:h-48 sm:w-48">
                    <Brain
                      size={100}
                      strokeWidth={1}
                      className="text-blue-200 sm:h-32 sm:w-32"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Brain className="text-blue-300" size={22} />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Neurosurgery
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Consultation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Activity className="text-orange-300" size={22} />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Spine Care
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Assessment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. INTRODUCTION */}
      <section
        id="our-services"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>How We Can Help</SectionLabel>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Care starts with the right conversation.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="leading-8 text-gray-600"
          >
            Each person's concerns are different. A consultation helps
            establish what needs to be assessed and which next steps
            may be appropriate for that individual.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const expanded = expandedService === service.number;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(30,64,175,0.08)] sm:p-8"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-orange-400 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-4xl font-bold tracking-tight text-gray-100">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-600">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setExpandedService(expanded ? null : service.number)
                  }
                  aria-expanded={expanded}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-blue-700"
                >
                  {expanded ? "Show Less" : "What to Expect"}
                  {expanded ? <Minus size={17} /> : <Plus size={17} />}
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-blue-700"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href="/appointment"
                  className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-blue-600 transition hover:text-orange-600"
                >
                  Request a Consultation
                  <ArrowRight size={18} />
                </a>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-7xl text-xs leading-6 text-gray-500">
          The services listed are consultation categories for this
          website design. Confirm with the clinic which services and
          assessments are actually available.
        </p>
      </section>

      {/* 03. PATIENT JOURNEY */}
      <section className="bg-[#f5f8ff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>Your Visit</SectionLabel>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              Three steps to get started.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              A simple overview of the appointment process, from your
              first request to discussing next steps.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-blue-200 md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-800 shadow-sm">
                    <Icon size={24} />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[0.18em] text-orange-600">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. PREPARATION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Before Your Visit</SectionLabel>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              A little preparation goes a long way.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Preparing a few details before your appointment can help
              make your conversation with the doctor more organized.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Bring relevant previous medical reports or scans.",
                "Prepare a list of medicines you currently take.",
                "Write down the questions you want to discuss.",
                "Keep your appointment confirmation details available.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-700"
                  />
                  <p className="text-sm leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-blue-600 p-7 text-white sm:p-10"
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/15 text-blue-200">
                <ClipboardCheck size={27} />
              </div>

              <h3 className="mt-8 text-2xl font-bold sm:text-3xl">
                Have questions before your visit?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Request an appointment and use the clinic's confirmed
                contact channels if you need help preparing for your visit.
              </p>

              <a
                href="/appointment"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
              >
                Book Appointment
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 05. FAQ */}
      <section className="bg-[#f5f8ff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              Before you book.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Find answers to common questions about preparing for
              your consultation.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-white px-5 sm:px-6"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-blue-700">
                      {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06. FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-600 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-200">
              <Clock3 size={15} />
              Take the Next Step
            </span>

            <h2 className="mt-7 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Start with a consultation.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
              Request a visit with Dr. Khalid Khan Zadran to discuss
              your concerns and learn about appropriate next steps.
            </p>

            <a
              href="/appointment"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
            >
              Request an Appointment
              <ArrowRight size={19} />
            </a>

            <p className="mt-5 text-xs leading-6 text-white/45">
              Appointment requests are subject to confirmation by the clinic.
              For emergencies, seek urgent medical care.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}






