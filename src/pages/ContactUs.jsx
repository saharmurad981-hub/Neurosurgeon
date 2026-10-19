import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowUpRight,
  Send,
  HeartPulse,
} from "lucide-react";

export default function ContactUs() {




  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend demonstration only.
    // Connect a backend or form service to send real messages.
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Rifah Medical Complex",
      extra: "Kabul, Afghanistan",
      href: "https://www.google.com/maps/search/?api=1&query=Rifah+Medical+Complex+Kabul+Afghanistan",
    },
    {
      icon: Phone,
      title: "Call the Clinic",
      detail: "+93 78 765 4751",
      extra: "Contact the clinic for inquiries",
      href: "tel:+93787654751",
    },
    {
      icon: Clock,
      title: "Appointments",
      detail: "By appointment",
      extra: "Contact the clinic to confirm availability",
      href: "tel:+93787654751",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <HeartPulse size={17} />
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            We're Here to{" "}
            <span className="text-blue-600">Help You.</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Have a question about an appointment or our services?
            Contact the clinic using the information below.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-blue-700 p-7 text-white sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Get in Touch
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Contact the Clinic
            </h3>

            <p className="mt-4 max-w-md leading-7 text-blue-100">
              For appointment inquiries and clinic information,
              please reach out using the contact details provided.
            </p>

            <div className="mt-9 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "Our Location"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.title === "Our Location"
                        ? "noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                      <Icon size={22} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-blue-200">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-semibold">
                        {item.detail}
                      </span>
                      <span className="mt-1 block text-sm text-blue-100">
                        {item.extra}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="mt-1 shrink-0 text-blue-200"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <HeartPulse size={22} />
              </div>
              <p className="text-sm leading-6 text-blue-100">
                Dr. Khalid Khan Zadran
                <span className="block font-semibold text-white">
                  Neurosurgery & Spine Care
                </span>
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the form below with your general inquiry.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
                <Send size={18} />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-800"
                >
                  Demo only: your message has not been sent to the clinic.
                  Connect a backend or form service to enable real submissions.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




