import All from "../assets/images";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Brain,
  ShieldCheck,
  Users,
  Star,
} from "lucide-react";

const stats = [
  { icon: ShieldCheck, number: "10+ Years", label: "of Experience" },
  { icon: Users, number: "1000+", label: "Successful Surgeries" },
  { icon: Star, number: "Trusted", label: "by Patients" },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#fbfdff] pt-28"
    >
      {/* Soft blue background */}
      <div
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-full w-[60%] bg-gradient-to-br from-blue-100 via-sky-100 to-blue-300"
        style={{
          clipPath: "ellipse(82% 100% at 100% 48%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-10 top-24 -z-10 h-72 w-72 rounded-full bg-blue-300/40 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 sm:px-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 py-8 lg:py-12"
        >
          {/* Small label */}
          <motion.div
            variants={reveal}
            className="mb-7 inline-flex items-center gap-3 rounded-full bg-blue-100/80 px-5 py-3 text-sm font-semibold text-blue-700"
          >
            <Activity size={20} />
            Expert Neurosurgeon
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={reveal}
            className="max-w-3xl text-2xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[54px] xl:text-[62px]"
          >
            Dr. Khalid Khan Zadran {" "}
            
            <span className="text-blue-600">
            Advanced Brain & Spine Care 
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg"
          >
            With a patient-first approach, Dr. Khalid Khan
            Zadran provides neurological consultations,
            careful diagnosis, and personalized care for
            brain and spine conditions.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="/appointment"
              whileHover={{
                y: -4,
                scale: 1.025,
                boxShadow: "0 14px 30px rgba(37,99,235,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              <CalendarDays size={22} />
              Book Appointment
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ y: -3, backgroundColor: "#eff6ff" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-blue-100 px-6 py-3.5 font-semibold text-slate-600 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-blue-600">
                <ArrowUpRight size={23} />
              </span>
              Discover More
            </motion.a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={reveal}
            className="mt-12 grid grid-cols-1 gap-5 border-t border-blue-100 pt-7 sm:grid-cols-3 sm:gap-3"
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3"
                >
                  <Icon
                    size={35}
                    strokeWidth={1.7}
                    className="shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      {item.number}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Decorative medical pulse line */}
          <div className="mt-12 hidden max-w-lg items-center gap-4 md:flex">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-400 via-blue-200 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-100"
            />
            <p className="text-xs font-medium text-slate-400">
              Better neurological health, brighter future
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[600px] lg:ml-auto lg:mr-0"
        >
          {/* Decorative blue circle */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-4 rounded-[45%] bg-gradient-to-br from-blue-200 via-sky-300 to-blue-500 sm:inset-8"
          />

          {/* Doctor photo */}
          <div className="relative h-[490px] overflow-hidden rounded-[32%_32%_20px_20px] sm:h-[530px] lg:h-[690px]">
            <motion.img
              src= {All.zadran}
              alt="Dr. Khalid Khan Zadran, neurosurgeon"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ scale: 1.035 }}
              className="h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-blue-100/10" />
          </div>

          {/* Floating doctor information card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="absolute bottom-5 left-3 right-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-blue-950/10 backdrop-blur-xl sm:bottom-9 sm:left-auto sm:right-3 sm:w-[345px] sm:p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Brain size={32} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate font-bold text-slate-900">
                Dr. Khalid Khan Zadran
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Consultant Neurosurgeon
              </p>
            </div>

            <motion.div
              whileHover={{ x: 4 }}
              className="text-blue-600"
            >
              
            </motion.div>
          </motion.div>

        

        </motion.div>
      </div>
    </section>
  );
}
