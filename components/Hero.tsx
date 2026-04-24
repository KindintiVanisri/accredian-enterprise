"use client";

import { useEffect, useRef } from "react";

const badges = [
  { icon: "🎓", text: "IIT & IIM Certified" },
  { icon: "⚡", text: "Go live in 2 weeks" },
  { icon: "📊", text: "Real-time analytics" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Staggered fade-in for children
    const children = el.querySelectorAll<HTMLElement>(".hero-animate");
    children.forEach((child, i) => {
      child.style.animationDelay = `${i * 0.15}s`;
      child.classList.add("animate-fade-up-run");
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      ref={heroRef}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-purple-500/10 blur-2xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          {/* Trust badge */}
          <div className="hero-animate inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 opacity-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 500+ Enterprise Organizations
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-animate text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 opacity-0"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Build the Skills
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
              Your Enterprise
            </span>
            <br />
            Needs to Win.
          </h1>

          {/* Subheading */}
          <p className="hero-animate text-lg text-white/70 leading-relaxed max-w-xl mb-10 opacity-0">
            India&apos;s most trusted enterprise learning platform. Partner with IITs, IIMs,
            and global universities to upskill your teams at scale — with measurable outcomes.
          </p>

          {/* CTA buttons */}
          <div className="hero-animate flex flex-wrap gap-4 mb-10 opacity-0">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all shadow-xl shadow-black/20 text-base"
            >
              Schedule a Free Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-base"
            >
              See Platform Tour
            </a>
          </div>

          {/* Feature badges */}
          <div className="hero-animate flex flex-wrap gap-3 opacity-0">
            {badges.map((b) => (
              <span
                key={b.text}
                className="flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full"
              >
                <span>{b.icon}</span>
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="hero-animate opacity-0 hidden lg:block">
          <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Enterprise Dashboard</p>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "Sora, sans-serif" }}>
                  Q4 Learning Report
                </p>
              </div>
              <span className="bg-emerald-400/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
                ↑ 34% YoY
              </span>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Active Learners", value: "2,847", delta: "+12%", color: "indigo" },
                { label: "Avg. Score", value: "91.4", delta: "+5.2", color: "cyan" },
                { label: "Completion", value: "96%", delta: "+8%", color: "emerald" },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-white/50 text-xs mb-1">{m.label}</p>
                  <p className="text-white font-bold text-xl stat-number">{m.value}</p>
                  <p className="text-emerald-400 text-xs font-medium mt-1">{m.delta}</p>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-3 mb-5">
              {[
                { label: "Data Science & AI", pct: 89, color: "bg-indigo-400" },
                { label: "Product Management", pct: 76, color: "bg-cyan-400" },
                { label: "Leadership & Strategy", pct: 92, color: "bg-emerald-400" },
              ].map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-xs text-white/60 mb-1">
                    <span>{p.label}</span>
                    <span className="font-medium text-white">{p.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${p.color}`}
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Learner avatars */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full border-2 border-indigo-900 flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ["#6366f1", "#0891b2", "#059669", "#7c3aed", "#db2777"][i],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs">+2,842 learners enrolled</p>
              <div className="ml-auto flex gap-2">
                <span className="flex items-center gap-1 bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/30">
                  🎓 IIT Certified
                </span>
                <span className="flex items-center gap-1 bg-white/10 text-white/70 text-xs px-2 py-1 rounded-full border border-white/15">
                  ✓ 98% Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Floating stat pill */}
          <div className="mt-4 flex justify-end">
            <div className="glass-card rounded-xl px-4 py-3 inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">500+ Programs</p>
                <p className="text-white font-semibold text-sm">Learner NPS Score: 98</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up-run {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-run {
          animation: fade-up-run 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
}
