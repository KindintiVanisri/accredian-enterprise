import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords: "enterprise learning, corporate training, IIT IIM programs, upskilling, L&D platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
