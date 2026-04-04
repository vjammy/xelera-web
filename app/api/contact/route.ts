import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site-content";

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid work email."),
  company: z.string().trim().min(2, "Please enter your company."),
  role: z.string().trim().min(2, "Please enter your role."),
  interest: z.string().trim().min(2, "Please select an area of interest."),
  message: z.string().trim().min(20, "Please share a bit more context."),
  website: z.string().trim().max(0).optional().default(""),
  startedAt: z.number().int().nonnegative(),
});

function formatHtmlBlock(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e5edf7;">
        <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6b7a90;">${label}</div>
        <div style="margin-top:6px;font-size:15px;line-height:1.7;color:#0b1525;">${value}</div>
      </td>
    </tr>
  `;
}

async function sendInternalNotification(payload: z.infer<typeof submissionSchema>) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.INTERNAL_CONTACT_EMAIL;

  if (!resendApiKey || !from || !to) {
    throw new Error("Resend internal notification is not configured.");
  }

  const resend = new Resend(resendApiKey);

  return resend.emails.send({
    from,
    to,
    subject: `New Xelera inquiry from ${payload.name}`,
    replyTo: payload.email,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;padding:32px;background:#f6f9fc;">
        <table style="max-width:640px;width:100%;margin:0 auto;background:#ffffff;border-radius:20px;padding:28px 32px;">
          <tr>
            <td>
              <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#5c6f88;">Xelera lead alert</div>
              <h1 style="margin:12px 0 8px;font-size:28px;line-height:1.1;color:#07111f;">A new inquiry just came in.</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#445469;">
                This lead came through the xelera.ai contact flow and should already be queued for CRM sync.
              </p>
            </td>
          </tr>
          ${formatHtmlBlock("Name", payload.name)}
          ${formatHtmlBlock("Work email", payload.email)}
          ${formatHtmlBlock("Company", payload.company)}
          ${formatHtmlBlock("Role", payload.role)}
          ${formatHtmlBlock("Interest", payload.interest)}
          ${formatHtmlBlock("Message", payload.message.replace(/\n/g, "<br />"))}
        </table>
      </div>
    `,
  });
}

async function sendConfirmation(payload: z.infer<typeof submissionSchema>) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !from) {
    throw new Error("Resend confirmation email is not configured.");
  }

  const resend = new Resend(resendApiKey);

  return resend.emails.send({
    from,
    to: payload.email,
    subject: "We received your Xelera inquiry",
    replyTo: process.env.CONTACT_CONFIRMATION_REPLY_TO ?? process.env.INTERNAL_CONTACT_EMAIL,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;padding:32px;background:#f6f9fc;">
        <table style="max-width:640px;width:100%;margin:0 auto;background:#ffffff;border-radius:20px;padding:28px 32px;">
          <tr>
            <td>
              <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#5c6f88;">Xelera</div>
              <h1 style="margin:12px 0 8px;font-size:28px;line-height:1.1;color:#07111f;">Thanks for reaching out, ${payload.name}.</h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#445469;">
                We have your note and the team will review it shortly. If your timing is urgent,
                you can also book directly using the link below.
              </p>
              <a href="${siteConfig.bookingUrl}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#27f6c4;color:#07111f;font-weight:700;text-decoration:none;">
                Book a Call
              </a>
              <p style="margin:24px 0 0;font-size:14px;line-height:1.7;color:#445469;">
                Inquiry summary: ${payload.interest} at ${payload.company}
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}

async function submitHubSpot(payload: z.infer<typeof submissionSchema>) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    throw new Error("HubSpot is not configured.");
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: payload.name },
          { name: "email", value: payload.email },
          { name: "company", value: payload.company },
          { name: "jobtitle", value: payload.role },
          { name: "message", value: payload.message },
          { name: "xelera_interest", value: payload.interest },
        ],
        context: {
          pageUri: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://xelera.ai"}/contact`,
          pageName: "Xelera Contact",
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`HubSpot sync failed with status ${response.status}.`);
  }
}

async function submitWebhook(payload: z.infer<typeof submissionSchema>) {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("CRM webhook is not configured.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source: "xelera.ai",
      leadType: "contact",
      payload,
    }),
  });

  if (!response.ok) {
    throw new Error(`CRM webhook failed with status ${response.status}.`);
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = submissionSchema.parse(json);

    if (payload.website) {
      return NextResponse.json({ ok: true, spam: true });
    }

    if (Date.now() - payload.startedAt < 1500) {
      return NextResponse.json(
        { ok: false, error: "That submission looked automated. Please try again." },
        { status: 400 },
      );
    }

    const settled = await Promise.allSettled([
      sendInternalNotification(payload),
      sendConfirmation(payload),
      ...(process.env.HUBSPOT_PORTAL_ID && process.env.HUBSPOT_FORM_ID
        ? [submitHubSpot(payload)]
        : []),
      ...(process.env.CRM_WEBHOOK_URL ? [submitWebhook(payload)] : []),
    ]);

    const internalEmailSucceeded = settled[0]?.status === "fulfilled";
    const crmSucceeded = settled.slice(2).some((result) => result.status === "fulfilled");

    if (!internalEmailSucceeded && !crmSucceeded) {
      throw new Error("No lead delivery channel succeeded.");
    }

    return NextResponse.json({
      ok: true,
      bookingUrl: siteConfig.bookingUrl,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.issues[0]?.message ?? "Please check the form and try again.",
        },
        { status: 400 },
      );
    }

    console.error("Contact form error", error);

    return NextResponse.json(
      {
        ok: false,
        error: "We could not process the submission right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
