const academicPartners = [
  { name: "IIT Delhi", tag: "IIT" },
  { name: "IIT Bombay", tag: "IIT" },
  { name: "IIT Kanpur", tag: "IIT" },
  { name: "IIT Madras", tag: "IIT" },
  { name: "IIT Roorkee", tag: "IIT" },
  { name: "IIM Bangalore", tag: "IIM" },
  { name: "IIM Kozhikode", tag: "IIM" },
  { name: "IIM Lucknow", tag: "IIM" },
  { name: "Great Lakes", tag: "Global" },
  { name: "NUS Singapore", tag: "Global" },
  { name: "MIT xPRO", tag: "Global" },
];

const industryPartners = [
  { name: "Google", tag: "Industry" },
  { name: "Microsoft", tag: "Industry" },
  { name: "Amazon AWS", tag: "Industry" },
  { name: "IBM", tag: "Industry" },
  { name: "Tableau", tag: "Industry" },
];

const tagColor: Record<string, string> = {
  IIT: "bg-orange-100 text-orange-700 border border-orange-200",
  IIM: "bg-blue-100 text-blue-700 border border-blue-200",
  Global: "bg-violet-100 text-violet-700 border border-violet-200",
  Industry: "bg-emerald-100 text-emerald-700 border border-emerald-200",
};

const all = [...academicPartners, ...industryPartners];

function PartnerChip({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="flex-shrink-0 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm mx-3">
      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-xs">
        {name.slice(0, 2)}
      </div>
      <span className="text-gray-800 font-semibold text-sm whitespace-nowrap">{name}</span>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColor[tag]}`}>{tag}</span>
    </div>
  );
}

export default function Partners() {
  const doubled = [...all, ...all];

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Academic & Industry Partners
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Built on world-class institutions.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our programs are co-designed and certified by India&apos;s most prestigious academic
            institutions and global technology leaders.
          </p>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="ticker-wrap py-3">
          <div className="ticker-track">
            {doubled.map((p, i) => (
              <PartnerChip key={`${p.name}-${i}`} name={p.name} tag={p.tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl p-10 border border-indigo-100 text-center">
          <h3
            className="text-2xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Academic excellence meets industry relevance.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Every program on our platform carries the credential of a top-tier institution. No fluff.
            No self-certification. Real university partnerships, real accreditation.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>50+</p>
              <p className="text-gray-500 text-sm font-medium">Partner Institutions</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-extrabold text-cyan-600 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>200+</p>
              <p className="text-gray-500 text-sm font-medium">Certified Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
