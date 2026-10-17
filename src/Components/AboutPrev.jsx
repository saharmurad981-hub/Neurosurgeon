import All from "../assets/images";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  HeartPulse,
  ClipboardCheck,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE: Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          {/* Small label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <HeartPulse size={17} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              About the Doctor
            </span>
          </div>

          {/* Main title */}
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Dedicated to Your{" "}
            <span className="text-blue-600">
              Brain and Spine Health.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Your neurological health deserves thoughtful attention
            and professional care. Dr. Khalid Khan Zadran focuses
            on brain and spine care, with an emphasis on helping
            patients understand their treatment options and feel
            supported throughout their care journey.
          </p>

          {/* Two cards */}
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Patient Survey card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <ClipboardCheck size={25} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Patient Survey
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your feedback matters. Help us understand your
                experience and improve patient care.
              </p>
            </motion.div>

            {/* Emergency Care card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-200/60 transition-colors hover:bg-blue-700"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <Clock3 size={25} />
              </div>

              <h3 className="text-lg font-bold">
                Emergency Care
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                For urgent medical concerns, seek immediate
                assistance from your local emergency service.
              </p>
            </motion.div>
          </div>

          {/* Learn More button */}
          <div className="mt-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 rounded-full bg-blue-600 py-2 pl-6 pr-2 text-white transition-colors hover:bg-blue-600"
            >
              <span className="font-semibold">Learn More</span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Doctor image */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 mx-auto w-full max-w-xl lg:order-2"
        >
          {/* Decorative background */}
          <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-blue-100/80 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-cyan-100/80 blur-2xl" />

          {/* Image frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-100 shadow-xl shadow-slate-200/70">
            <img
              src={All.zadran}
              alt="Dr. Khalid Khan Zadran"
              className="h-[420px] w-full object-cover object-center sm:h-[540px]"
              loading="lazy"
            />

            {/* Image overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-blue-200">
                    Neurosurgery & Spine Care
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Dr. Khalid Khan Zadran
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                    <ShieldCheck size={17} />
                    Brain and Spine Health
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md sm:flex">
                  <HeartPulse size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating label */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-lg sm:-left-7 sm:p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <HeartPulse size={24} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Brain & Spine
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Specialized Care
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




