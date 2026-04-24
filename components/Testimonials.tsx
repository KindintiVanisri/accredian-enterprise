"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Sharma",
    role: "Chief People Officer",
    company: "Razorpay",
    initials: "PS",
    color: "#6366f1",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Vikram Nair",
    role: "VP of Engineering",
    company: "PhonePe",
    initials: "VN",
    color: "#0891b2",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Ananya Krishnan",
    role: "Head of Learning & Development",
    company: "Infosys BPM",
    initials: "AK",
    color: "#059669",
  },
  {
    quote:
      "The custom learning paths tailored to our fintech domain were a game changer. Our product teams now speak the same data language as engineering. Truly transformative.",
    name: "Rohan Mehta",
    role: "CHRO",
    company: "Groww",
    initials: "RM",
    color: "#7c3aed",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Trusted by India&apos;s
            <br />
            fastest-growing companies.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large featured card */}
          <div
            key={current}
            className="lg:col-span-2 rounded-3xl p-10 shadow-xl text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${t.color}ee, ${t.color}bb)` }}
          >
            {/* Quote decoration */}
            <div className="absolute top-6 right-8 text-9xl font-serif text-white/10 leading-none select-none">
              "
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-xl text-white/90 leading-relaxed mb-8 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base border-2 border-white/30"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white font-bold text-base">{t.name}</p>
                <p className="text-white/70 text-sm">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      current === i ? "bg-white w-8" : "bg-white/30 w-3"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Mini cards */}
          <div className="flex flex-col gap-4">
            {testimonials
              .filter((_, i) => i !== current)
              .slice(0, 2)
              .map((tc) => (
                <button
                  key={tc.name}
                  onClick={() => setCurrent(testimonials.indexOf(tc))}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: tc.color }}
                    >
                      {tc.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{tc.name}</p>
                      <p className="text-gray-400 text-xs">{tc.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    &ldquo;{tc.quote}&rdquo;
                  </p>
                </button>
              ))}

            {/* Metric highlight */}
            <div className="bg-indigo-600 rounded-2xl p-6 text-white">
              <p className="text-4xl font-extrabold mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                94%
              </p>
              <p className="text-white/80 text-sm">
                Average program completion rate across all enterprise clients
              </p>
              <div className="mt-4 bg-white/10 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: "94%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
