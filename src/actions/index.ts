// Export central
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY);

export const server = {
    sendEmail: defineAction({
        accept: 'form',
        input: z.object({
            firstname: z.string(),
            email: z.string().email(),
            message: z.string(),
        }),
        handler: async (input) => {
            // On peut maintenant utiliser ton vrai domaine !
            const { error } = await resend.emails.send({
                from: 'Contact <contact@hugofoisseau.fr>',
                to: ['contact@hugofoisseau.fr'],
                replyTo: input.email,
                subject: `Nouveau message de ${input.firstname}`,
                text: `Email: ${input.email}\n\nMessage: ${input.message}`,
            });

            if (error) {
                console.error("Erreur Resend:", error);
                throw new Error(error.message);
            }

            return { success: true };
        },
    }),
}