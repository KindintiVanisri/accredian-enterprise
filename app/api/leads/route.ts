import { NextRequest, NextResponse } from "next/server";

// In a real app, you'd connect to a DB (Supabase, MongoDB, etc.)
// For this demo, we store in-memory and log to console.
const leads: object[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, message } = body;

    // Basic validation
    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company,
      teamSize,
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("New lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Thank you! Our team will reach out within 24 hours." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple endpoint to view captured leads (protect in production!)
  return NextResponse.json({ leads, count: leads.length });
}
