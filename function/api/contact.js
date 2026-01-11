export async function onRequestPost({ request }) {
    try {
        const body = await request.json();

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

        // MailChannels payload (Cloudflare-supported email relay)
        const payload = {
            personalizations: [
                {
                    to: [{ email: "hr@cosmosnextgen.com", name: "COSMOS Admin" }],
                    subject: `New message from COSMOS website: ${name}`,
                },
            ],
            from: {
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
        return new Response(JSON.stringify({ error: "Server error", detail: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
