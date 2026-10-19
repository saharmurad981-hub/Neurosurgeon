import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarDays,
  Clock3,
  Brain,
  Activity,
  ClipboardCheck,
  UserRound,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    value: "neurosurgery",
    label: "Neurosurgery Consultation",
  
    icon: Brain,
  },
  {
    value: "spine",
    label: "Spine Consultation",
  
    icon: Activity,
  },
  {
    value: "followup",
    label: "Follow-up Visit",
    
    icon: ClipboardCheck,
  },
];

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const faqs = [
  {
    question: "Is my appointment confirmed immediately?",
    answer:
      "No. This form submits an appointment request. The clinic must confirm the date and time before your visit is considered booked.",
  },
  {
    question: "What should I bring to my visit?",
    answer:
      "Bring relevant previous medical reports, imaging results, a list of current medicines, and any referral documents you have.",
  },
  {
    question: "Can I change my preferred appointment time?",
    answer:
      "Contact the clinic through its verified contact channels to discuss a different time. Availability must be confirmed by the clinic.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  note: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

export default function Appointment() {
 

  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState(initialForm);
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState("");

  const today = new Date().toLocaleDateString("en-CA");
  const selectedService = services.find(
    (item) => item.value === service
  );

  function updateForm(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function nextStep() {
    setStatus("");
    setStep((current) => Math.min(current + 1, 3));
  }

  function previousStep() {
    setStatus("");
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // This is a UI demonstration only.
    // Connect a real email service or secure backend before publishing.
    setStatus(
      "The form is ready, but it has not been sent. Connect an email service or backend to submit your request to the clinic."
    );
  }

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-blue-600">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
              <CalendarDays size={15} />
              Appointment Request
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Your next step
              <span className="block text-blue-300">
                starts with a visit.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Request a consultation with Dr. Khalid Khan Zadran.
              Select your preferred service and time, and provide
              your contact details.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Start Booking <ArrowRight size={18} />
              </a>

              <a
                href="#clinic-contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Clinic Information
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm text-white/65">
              <MapPin size={18} className="text-blue-300" />
              Rifah Medical Complex, Kabul
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Your Appointment
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Plan your visit
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-400/15 p-3 text-blue-200">
                  <Stethoscope size={28} />
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  ["01", "Choose a service"],
                  ["02", "Select your preferred time"],
                  ["03", "Share your contact details"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/15 text-sm font-bold text-blue-200">
                      {number}
                    </span>
                    <p className="text-sm font-medium text-white/90">
                      {label}
                    </p>
                    <CheckCircle2
                      className="ml-auto text-blue-300"
                      size={19}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-white/5 p-4 text-xs leading-6 text-white/60">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-300"
                />
                Your preferred time requires confirmation from the clinic.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section
        id="booking-form"
        className="bg-[#f5f8fc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Book Online
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Request your appointment.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Complete the steps to send your preferred appointment
              details to the clinic once the form is connected to a
              working submission service.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Clock3 size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">Choose a preferred time</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The clinic must verify actual availability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">Share necessary details</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Only provide information needed to arrange your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_70px_rgba(15,45,80,0.08)] sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                  Step {step} of 3
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {step === 1 && "Appointment details"}
                  {step === 2 && "Contact information"}
                  {step === 3 && "Review your request"}
                </h3>
              </div>
              <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                {step === 1 && <CalendarDays size={24} />}
                {step === 2 && <UserRound size={24} />}
                {step === 3 && <ClipboardCheck size={24} />}
              </div>
            </div>

            <div className="mt-7 flex gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`h-1.5 flex-1 rounded-full transition ${
                    item <= step ? "bg-blue-600" : "bg-slate-100"
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-7"
                  >
                    <div>
                      <label className="text-sm font-semibold">
                        Select consultation type
                      </label>

                      <div className="mt-3 space-y-3">
                        {services.map((item) => {
                          const Icon = item.icon;
                          const selected = service === item.value;

                          return (
                            <button
                              type="button"
                              key={item.value}
                              onClick={() => setService(item.value)}
                              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                                selected
                                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                                  : "border-slate-200 hover:border-blue-200"
                              }`}
                            >
                              <span
                                className={`rounded-xl p-3 ${
                                  selected
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-50 text-blue-700"
                                }`}
                              >
                                <Icon size={21} />
                              </span>

                              <span className="flex-1">
                                <span className="block text-sm font-semibold">
                                  {item.label}
                                </span>
                                <span className="mt-1 block text-xs text-slate-500">
                                  {item.description}
                                </span>
                              </span>

                              {selected && (
                                <CheckCircle2
                                  size={20}
                                  className="text-blue-600"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="visit-date"
                          className="text-sm font-semibold"
                        >
                          Preferred date
                        </label>
                        <input
                          id="visit-date"
                          type="date"
                          min={today}
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="visit-time"
                          className="text-sm font-semibold"
                        >
                          Preferred time
                        </label>
                        <select
                          id="visit-time"
                          value={time}
                          onChange={(event) => setTime(event.target.value)}
                          className={inputClass}
                          required
                        >
                          <option value="">Select a time</option>
                          {times.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <p className="text-xs leading-6 text-slate-500">
                      The displayed time options are examples, not
                      verified clinic availability.
                    </p>

                    <button
                      type="button"
                      disabled={!service || !date || !time}
                      onClick={nextStep}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="patient-name"
                        className="text-sm font-semibold"
                      >
                        Full name
                      </label>
                      <div className="relative">
                        <UserRound
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="patient-name"
                          name="name"
                          value={form.name}
                          onChange={updateForm}
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className={`${inputClass} pl-11`}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="patient-phone"
                        className="text-sm font-semibold"
                      >
                        Phone number
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="patient-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={updateForm}
                          autoComplete="tel"
                          placeholder="Enter your contact number"
                          className={`${inputClass} pl-11`}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="patient-email"
                        className="text-sm font-semibold"
                      >
                        Email address (optional)
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="patient-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={updateForm}
                          autoComplete="email"
                          placeholder="you@example.com"
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="patient-note"
                        className="text-sm font-semibold"
                      >
                        Short note (optional)
                      </label>
                      <textarea
                        id="patient-note"
                        name="note"
                        value={form.note}
                        onChange={updateForm}
                        rows={3}
                        maxLength={300}
                        placeholder="Add a short note about your request"
                        className={`${inputClass} resize-y`}
                      />
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Please do not include sensitive medical details.
                      </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-4 font-semibold hover:bg-slate-50"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>

                      <button
                        type="button"
                        disabled={!form.name.trim() || !form.phone.trim()}
                        onClick={nextStep}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Review Request <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-5"
                  >
                    <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                        Request Summary
                      </p>

                      <div className="mt-5 space-y-5">
                        <div>
                          <p className="text-xs text-slate-500">Service</p>
                          <p className="mt-1 font-semibold">
                            {selectedService?.label}
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-xs text-slate-500">Date</p>
                            <p className="mt-1 font-semibold">{date}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Time</p>
                            <p className="mt-1 font-semibold">{time}</p>
                          </div>
                        </div>

                        <div className="border-t border-slate-200 pt-4">
                          <p className="text-xs text-slate-500">Patient</p>
                          <p className="mt-1 font-semibold">{form.name}</p>
                          <p className="mt-1 text-sm text-slate-600">
                            {form.phone}
                          </p>
                          {form.email && (
                            <p className="mt-1 text-sm text-slate-600">
                              {form.email}
                            </p>
                          )}
                        </div>

                        {form.note && (
                          <div className="border-t border-slate-200 pt-4">
                            <p className="text-xs text-slate-500">Note</p>
                            <p className="mt-1 text-sm leading-6">
                              {form.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                      This is a preferred appointment request. The clinic
                      must confirm the date and time.
                    </div>

                    {status && (
                      <p
                        role="status"
                        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
                      >
                        {status}
                      </p>
                    )}

                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-4 font-semibold hover:bg-slate-50"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>

                      <button
                        type="submit"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Submit Request <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* CLINIC CONTACT */}
      <section
        id="clinic-contact"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Contact & Location
            </p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Need help with your visit?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
             tel:+93787654751
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <MapPin size={23} />
              </div>
              <div>
                <h3 className="font-semibold">Clinic Address</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Rifah Medical Complex, Kabul
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <Phone size={23} />
              </div>
              <div>
                <h3 className="font-semibold">Phone & Email</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Add the clinic's verified phone number and email here.
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Replace this text after confirming the contact details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8fc] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Helpful Information
            </p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white px-5 sm:px-6"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus size={19} className="shrink-0 text-blue-700" />
                    ) : (
                      <Plus size={19} className="shrink-0 text-blue-700" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-7 text-slate-600">
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
    </main>
  );
}



