// functions/api/contact.js

export async function onRequestPost(context) {
    try {
        const body = await context.request.json();

        const name = (body?.name || "").trim();
        const email = (body?.email || "").trim();
        const phone = (body?.phone || "").trim();
        const message = (body?.message || "").trim();

        if (!name || !email || !phone || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const apiKey = context.env.RESEND_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: "Server misconfigured: missing RESEND_API_KEY" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        // IMPORTANT:
        // Use a domain email you control for "from".
        // This does NOT need to be a real mailbox/inbox — it just needs domain auth (SPF/DKIM via Resend).
        const fromEmail = "no-reply@cosmosnextgen.com";

        const subject = `New message from COSMOS website: ${name}`;

        const text =
            `New contact form submission:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Message:\n${message}\n`;

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: `COSMOS Website <${fromEmail}>`,
                to: ["hr@cosmosnextgen.com"],
                reply_to: email,
                subject,
                text,
            }),
        });

        const raw = await res.text();
        let data = {};
        try { data = JSON.parse(raw); } catch {}

        if (!res.ok) {
            return new Response(
                JSON.stringify({
                    error: "Email send failed.",
                    detail: data || raw,
                }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify({ ok: true, id: data?.id }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: "Server error.", detail: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function onRequestGet() {
    return new Response(JSON.stringify({ ok: true, hint: "POST to this endpoint." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
