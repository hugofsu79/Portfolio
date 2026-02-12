import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        if (!import.meta.env.RESEND_API_KEY) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing API key" }),
                { status: 500 }
            );
        }

        const body = await request.json();
        const { firstname, email, message } = body;

        if (!firstname || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing fields" }),
                { status: 400 }
            );
        }

        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: "Contact Portfolio <contact@hugofoisseau.fr>",
            to: "contact@hugofoisseau.fr",
            replyTo: email,
            subject: `Nouveau message de ${firstname}`,
            html: `
        <p><strong>Prénom :</strong> ${firstname}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>`,
        });

        if (!result || result.error) {
            return new Response(
                JSON.stringify({ success: false, error: "Email failed" }),
                { status: 502 }
            );
        }

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ success: false, error: "Server error" }),
            { status: 500 }
        );
    }
};