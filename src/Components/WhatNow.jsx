
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Phone,
  HeartPulse,
} from "lucide-react";

export default function WhatNow() {
  return (
    <section className="bg-slate-30 px-5 pb-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-none  border border-blue-300   px-7 py-12 text-gray-900 sm:px-12 sm:py-16 lg:px-16"
      >
        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-500">
              <HeartPulse size={17} />
              Your Health Matters
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
              Contact
              <span className=" text-blue-600">
                 us
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Have questions about brain or spine care? Reach out
              to the clinic to discuss appointment availability and
              learn about your next steps.
            </p>

            <p className="mt-4 text-sm text-slate-900">
              Rifah Medical Complex, Kabul, Afghanistan
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              to="/appointment"
              className="group flex items-center justify-between gap-6 rounded-full bg-blue-600 py-2 pl-6 pr-2 font-semibold transition hover:bg-blue-500"
            >
              <span className="flex items-center gap-2">
                <CalendarDays size={19} />
                Book Appointment
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={22} />
              </span>
            </Link>

            <a
              href="tel:+93787654751"
              className="group flex items-center justify-between gap-6 rounded-full border border-blue-600 bg-white/5 py-2 pl-6 pr-2 font-semibold transition hover:bg-white/10"
            >
              <span className="flex items-center gap-2 " >
                <Phone size={19} />
                Call the Clinic
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={22} />
              </span>
            </a>
          </div>
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
        </div>
         
      </motion.div>
      
    </section>
  );
}


