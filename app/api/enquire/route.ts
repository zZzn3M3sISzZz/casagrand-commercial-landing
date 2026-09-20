import { NextResponse } from "next/server";
import { PROJECTS } from "@/lib/projects";

const TO = "leasing@casagrand.co.in";

type EnquireBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  project?: string;
  message?: string;
  website?: string;
};

function invalid(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: EnquireBody;
  try {
    body = await request.json();
  } catch {
    return invalid("Invalid request.");
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const projectSlug = body.project?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name) return invalid("Enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return invalid("Enter a valid email address.");
  }
  if (!/^[0-9+\-\s]{8,}$/.test(phone)) {
    return invalid("Enter a valid phone number.");
  }
  if (!message) return invalid("Tell us what you are looking for.");

  const project =
    PROJECTS.find((item) => item.slug === projectSlug)?.name ?? "Any / not sure yet";
  const subject = `Casagrand Commercial enquiry — ${project}`;

  const res = await fetch(`https://formsubmit.co/ajax/${TO}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      company: company || "—",
      project,
      message,
      _subject: subject,
      _replyto: email,
      _template: "table",
    }),
  });

  if (!res.ok) {
    return invalid("Could not send the enquiry. Please try again.", 502);
  }

  return NextResponse.json({ ok: true });
}
