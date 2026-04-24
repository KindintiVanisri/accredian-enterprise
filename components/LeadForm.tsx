"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const teamSizes = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 500 employees",
  "501 – 1,000 employees",
  "1,000+ employees",
];

const benefits = [
  "Free 30-min platform walkthrough with your use case",
  "Custom program recommendation for your industry",
  "Pricing tailored to your team size and scope",
  "No commitment, no spam — just a conversation",
];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.teamSize) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", teamSize: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="lead-form" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Let&apos;s build your learning
            <br />future together.
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Fill in the form and one of our enterprise L&D consultants will reach out within
            24 hours to understand your needs and schedule a personalized demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Benefits list */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-base">{b}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">Or reach us directly:</p>
              <a
                href="mailto:enterprise@accredian.com"
                className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
              >
                enterprise@accredian.com
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Response Time", value: "< 24hrs" },
                { label: "Enterprises Served", value: "500+" },
                { label: "NPS Score", value: "98" },
              ].map((m) => (
                <div key={m.label} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-white font-extrabold text-xl stat-number">{m.value}</p>
                  <p className="text-white/50 text-xs mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Request Received!
                </h3>
                <p className="text-gray-500 mb-6">
                  Thank you! Our team will reach out within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Request a Free Demo
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your learning goals..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Request a Free Demo"
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    No spam, ever.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
