"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Enterprise Clients", value: 500, suffix: "+", sub: "Organizations trust Accredian" },
  { label: "Learners Upskilled", value: 50, suffix: "K+", sub: "Professionals transformed" },
  { label: "Satisfaction Rate", value: 98, suffix: "%", sub: "Learner satisfaction score" },
  { label: "Curated Programs", value: 500, suffix: "+", sub: "Across 15+ domains" },
  { label: "Completion Rate", value: 94, suffix: "%", sub: "Industry-leading outcome" },
  { label: "University Partners", value: 50, suffix: "+", sub: "IITs, IIMs & global institutions" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(stat.value, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-2 stat-number group-hover:scale-110 transition-transform duration-200">
        {count}
        <span className="text-cyan-500">{stat.suffix}</span>
      </div>
      <div className="text-gray-900 font-semibold text-base mb-1">{stat.label}</div>
      <div className="text-gray-500 text-sm">{stat.sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2
            className="text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            The platform enterprises trust
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
