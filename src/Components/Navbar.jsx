
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "ContactUs", path: "/contact" },
];

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -15,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 16,
        mass: 0.8,
      }}
      className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-8"
    >
      <motion.nav
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(20px)" }}
        whileHover={{
          boxShadow: "0px 12px 40px rgba(15, 23, 42, 0.10)",
        }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/75 px-5 py-3 shadow-sm backdrop-blur-xl sm:px-7"
      >
        {/* Animated Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2"
          aria-label="Dr. Khalid Khan Zadran home"
        >
          <motion.span
            whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"
          >
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* <HeartPulse size={27} strokeWidth={2.2} /> */}
                <Brain size={32}  strokeWidth={2.2}/>
            </motion.span>
          </motion.span>

          <motion.span
            whileHover={{ x: 3 }}
            className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
          >
            Dr.
            <span className="text-blue-700">Khalid</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItem}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative block whitespace-nowrap text-sm font-semibold transition-colors duration-200 xl:text-base ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-800 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative block py-1"
                  >
                    {link.name}

                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                          }}
                          className="absolute -bottom-2 left-0 right-0 h-0.5 origin-left rounded-full bg-blue-600"
                        />
                      )}
                    </AnimatePresence>
                  </motion.span>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Appointment Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="hidden sm:block"
        >
          <Link
            to="/appointment"
            className="group flex items-center gap-3 rounded-full bg-blue-600 py-1.5 pl-5 pr-1.5 font-semibold text-white shadow-md shadow-blue-600/20"
          >
            <motion.span
              whileHover={{ x: 2 }}
              className="text-sm xl:text-base"
            >
              Book Appointment
            </motion.span>

            <motion.span
              whileHover={{
                rotate: 45,
                scale: 1.08,
              }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700"
            >
              <ArrowUpRight size={22} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Animated Mobile Menu Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.85, rotate: 8 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.18 }}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.94,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.96,
              filter: "blur(5px)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
            }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:hidden"
          >
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={navItem}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-800 hover:bg-slate-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                variants={navItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-full bg-blue-600 py-2 pl-5 pr-2 text-white shadow-lg shadow-blue-600/20"
                >
                  <span className="font-semibold">
                    Book Appointment
                  </span>

                  <motion.span
                    whileHover={{ rotate: 45 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700"
                  >
                    <ArrowUpRight size={22} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


