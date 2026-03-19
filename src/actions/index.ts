// Export central
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY);

export const server = {
    sendEmail: defineAction({
        accept: 'form',
        input: z.object({
            firstname: z.string(),
            email: z.string().email(),
            message: z.string(),
        }),
        handler: async (input) => {
            const { error } = await resend.emails.send({
                from: 'Portfolio <notifications@hugofoisseau.fr>',
                to: ['hugo266@icloud.com'], // Envoi vers iCloud pour contourner le blocage Hostinger
                replyTo: input.email,
                subject: `Nouveau message de ${input.firstname}`,
                text: `Contact: ${input.firstname} (${input.email})\n\nMessage: ${input.message}`,
            });

            // INDISPENSABLE : Pour que le site sache s'il y a une erreur
            if (error) {
                console.error("Erreur Resend:", error);
                throw new Error(error.message);
            }

            return { success: true };
        },
    }),
}