import { motion } from "motion/react";
import { Link } from "react-router";
import {
  HeartPulse,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const exploreLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },

  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Neurosurgery",
  "Brain Care",
  "Spine Care",
  "Patient Consultation",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 pb-6 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                <HeartPulse size={27} />
              </span>

              <span className="text-xl font-bold tracking-tight">
                Dr. Khalid
                <span className="block text-sm font-medium text-blue-400">
                  Khan Zadran
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Information and contact details for brain and spine
              care at Rifah Medical Complex, Kabul.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300">
              <HeartPulse size={15} className="text-blue-400" />
              Neurosurgery & Spine Care
            </div>
          </motion.div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold">Explore</h3>
            <div className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {service}
                </li>
              ))}
            </ul>

            <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">
              Contact the clinic to confirm the services available
              and appointment arrangements.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-5 space-y-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rifah+Medical+Complex+Kabul+Afghanistan"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span>
                  Rifah Medical Complex
                  <span className="mt-1 block">
                    Kabul, Afghanistan
                  </span>
                </span>
              </a>

              <a
                href="tel:+93787654751"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-blue-400"
                />
                +93 78 765 4751
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Clock
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span>
                  Appointment Hours
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    Contact the clinic to confirm availability.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Khalid Khan Zadran.
            All rights reserved.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Request an Appointment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
