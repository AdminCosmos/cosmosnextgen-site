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

        const payload = {
            personalizations: [
                {
                    to: [{ email: "hr@cosmosnextgen.com", name: "COSMOS HR" }],
                    subject: `New message from COSMOS website: ${name}`,
                },
            ],
            from: {
                // Keep this domain-based. Random gmail/yahoo often fails with MailChannels.
                email: "no-reply@cosmosnextgen.com",
                name: "COSMOS Website",
            },
            reply_to: {
                email,
                name,
            },
            content: [
                {
                    type: "text/plain",
                    value:
                        `New contact form submission:\n\n` +
                        `Name: ${name}\n` +
                        `Email: ${email}\n` +
                        `Phone: ${phone}\n\n` +
                        `Message:\n${message}\n`,
                },
            ],
        };

        const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const txt = await res.text().catch(() => "");
            return new Response(JSON.stringify({ error: "Email send failed.", detail: txt }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
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

// Optional: make GET friendly instead of 405 confusion
export async function onRequestGet() {
    return new Response(JSON.stringify({ ok: true, hint: "POST to this endpoint." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
