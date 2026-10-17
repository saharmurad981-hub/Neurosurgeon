
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Brain,
  Activity,
  Stethoscope,
  ScanLine,
  HeartPulse,
  MoveUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Brain,
    title: "Brain & Neurological Care",
    description:
      "Assessment of neurological symptoms and brain conditions, with guidance on appropriate investigations and care options.",
    tags: ["Brain Health", "Neurological Assessment"],
  },
  {
    number: "02",
    icon: Activity,
    title: "Spine & Back Care",
    description:
      "Evaluation of spine-related concerns, including back pain, nerve symptoms, and possible treatment pathways.",
    tags: ["Spine Health", "Nerve Symptoms"],
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Neurosurgical Consultation",
    description:
      "A dedicated consultation to discuss symptoms, review medical history, and understand possible next steps.",
    tags: ["Patient Consultation", "Care Planning"],
  },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 sm:py-28 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-sky-200/40 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Our Services
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Specialized Care for Your{" "}
            <span className="text-blue-600">
              Brain & Spine
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Every patient's needs are different. Explore our
            consultation and neurological care services to
            understand the available options for your care.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/[0.07] sm:p-7"
              >
                {/* Animated top border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                  }}
                  className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-blue-600 to-sky-300"
                />

                <div className="mb-7 flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </motion.div>

                  <span className="text-sm font-bold tracking-widest text-slate-300 transition-colors group-hover:text-blue-500">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500 sm:text-base">
                  {service.description}
                </p>

                {/* Service tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-700 p-7 text-center sm:mt-16 sm:flex-row sm:p-10 sm:text-left lg:p-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Your Health Matters
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Have questions about your care?
            </h3>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Arrange a consultation to discuss your concerns
              and learn about appropriate care options.
            </p>
          </div>

          <motion.a
            href="/appointment"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition-colors hover:bg-blue-500"
          >
            Book a Consultation
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
