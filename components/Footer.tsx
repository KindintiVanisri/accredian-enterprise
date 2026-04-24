const footerLinks = {
  Solutions: [
    "Enterprise Learning",
    "Custom Programs",
    "Analytics Dashboard",
    "HR Integrations",
    "Certificates",
  ],
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Leadership",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Case Studies", "Whitepapers", "Webinars", "L&D Playbook", "API Docs"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Accredian <span className="text-indigo-400">Enterprise</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce
              with programs from IITs, IIMs, and global universities.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {["LinkedIn", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
