"use client";

import { useState } from "react";

const features = [
  {
    icon: "🎓",
    title: "World-Class Curriculum",
    description:
      "Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.",
    badge: "Popular",
    color: "indigo",
  },
  {
    icon: "📊",
    title: "Enterprise L&D Dashboard",
    description:
      "Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.",
    color: "cyan",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentor Network",
    description:
      "1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.",
    color: "violet",
  },
  {
    icon: "👥",
    title: "Live Cohort Learning",
    description:
      "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    color: "emerald",
  },
  {
    icon: "🗺️",
    title: "Custom Learning Paths",
    description:
      "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
    badge: "Popular",
    color: "amber",
  },
  {
    icon: "🏆",
    title: "Accredited Certificates",
    description:
      "Globally recognized credentials from partner institutions. Verifiable, shareable, and career-defining.",
    color: "indigo",
  },
  {
    icon: "🤖",
    title: "AI-Powered Personalization",
    description:
      "Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention.",
    color: "cyan",
  },
  {
    icon: "🔗",
    title: "Seamless HR Integration",
    description:
      "Native integrations with Workday, SAP SuccessFactors, and major HRMS platforms for frictionless deployment.",
    color: "violet",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50 border-indigo-100 hover:border-indigo-300",
  cyan: "bg-cyan-50 border-cyan-100 hover:border-cyan-300",
  violet: "bg-violet-50 border-violet-100 hover:border-violet-300",
  emerald: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
  amber: "bg-amber-50 border-amber-100 hover:border-amber-300",
};

const iconBg: Record<string, string> = {
  indigo: "bg-indigo-100 text-indigo-700",
  cyan: "bg-cyan-100 text-cyan-700",
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
};

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Everything your L&D team
            <br />
            needs to scale.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the operating
            system for ambitious learning organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative rounded-2xl border p-6 cursor-default transition-all duration-200 ${
                colorMap[f.color]
              } ${hovered === i ? "shadow-lg -translate-y-1" : "shadow-sm"}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {f.badge && (
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {f.badge}
                </span>
              )}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${iconBg[f.color]}`}
              >
                {f.icon}
              </div>
              <h3
                className="text-gray-900 font-bold text-base mb-2"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              <button className="mt-4 text-indigo-600 text-sm font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-indigo-600 text-white rounded-2xl px-8 py-5 shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-colors cursor-pointer">
            <span className="font-bold text-base">Ready to see it all in action?</span>
            <a
              href="#lead-form"
              className="bg-white text-indigo-600 font-bold px-5 py-2 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
            >
              Request a Platform Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
