"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Needs Assessment",
    short: "Audit skill gaps and strategic objectives.",
    description:
      "We start with a deep-dive audit of your team's skill gaps and strategic objectives. Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.",
    icon: "🔍",
    color: "indigo",
  },
  {
    number: "02",
    title: "Program Design",
    short: "Custom learning paths for your context.",
    description:
      "Custom learning paths are architected with your domain, culture, and timelines in mind. From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.",
    icon: "🎨",
    color: "cyan",
  },
  {
    number: "03",
    title: "Deployment & Onboarding",
    short: "Seamless rollout with zero disruption.",
    description:
      "Seamless rollout with zero disruption to your team's workflow. White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.",
    icon: "🚀",
    color: "violet",
  },
  {
    number: "04",
    title: "Track & Optimize",
    short: "Live dashboards with real-time ROI insights.",
    description:
      "Live dashboards surface progress, risks, and ROI in real time. Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.",
    icon: "📈",
    color: "emerald",
  },
];

const colorMap: Record<string, { ring: string; bg: string; text: string; dot: string }> = {
  indigo: { ring: "ring-indigo-500", bg: "bg-indigo-600", text: "text-indigo-600", dot: "bg-indigo-500" },
  cyan: { ring: "ring-cyan-500", bg: "bg-cyan-600", text: "text-cyan-600", dot: "bg-cyan-500" },
  violet: { ring: "ring-violet-500", bg: "bg-violet-600", text: "text-violet-600", dot: "bg-violet-500" },
  emerald: { ring: "ring-emerald-500", bg: "bg-emerald-600", text: "text-emerald-600", dot: "bg-emerald-500" },
};

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];
  const c = colorMap[activeStep.color];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Live in 14 days.{" "}
            <span className="text-indigo-600">Measurable ROI</span> in 90.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our structured four-step methodology takes you from assessment to measurable
            outcomes without disrupting your business operations.
          </p>
        </div>

        {/* Desktop: tabs + detail */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* Step tabs */}
          <div className="space-y-3">
            {steps.map((step, i) => {
              const isActive = active === i;
              const sc = colorMap[step.color];
              return (
                <button
                  key={step.number}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                    isActive
                      ? `border-${step.color}-300 bg-${step.color}-50 shadow-md`
                      : "border-gray-100 bg-gray-50 hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all ${
                        isActive ? sc.bg : "bg-gray-200"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div>
                      <p
                        className={`font-bold text-base transition-colors ${
                          isActive ? sc.text : "text-gray-700"
                        }`}
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {step.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-0.5">{step.short}</p>
                    </div>
                    <span className="ml-auto text-xl">{step.icon}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            className={`rounded-3xl p-10 ${c.bg} text-white shadow-2xl shadow-black/10`}
            key={active}
          >
            <div className="text-6xl mb-6">{activeStep.icon}</div>
            <div className="text-white/60 font-bold text-sm uppercase tracking-widest mb-2">
              Step {activeStep.number}
            </div>
            <h3
              className="text-3xl font-extrabold mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              {activeStep.title}
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              {activeStep.description}
            </p>
            <div className="flex gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === i ? "bg-white w-8" : "bg-white/30 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => {
            const sc = colorMap[step.color];
            return (
              <div key={step.number} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${sc.bg}`}>
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
