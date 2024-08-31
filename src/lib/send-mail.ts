'use server';
import { CreateEmailResponseSuccess, Resend } from 'resend';

const key = process.env.RESEND_API_KEY;

const resend = new Resend(key);

type SendEmailProps = {
  email: string;
  subject: string;
  template: React.ReactNode;
};

type SendEmailResponse = {
  errorMessage?: string;
  error: boolean;
  data?: CreateEmailResponseSuccess | null;
};

export async function SendEmail({
  email,
  subject,
  template,
}: SendEmailProps): Promise<SendEmailResponse> {
  const { data, error } = await resend.emails.send({
    from: 'ZACKOZACK <bot@zackozack.xyz>',
    to: [email, 'id.ayushkryadav@gmail.com'],
    subject,
    replyTo: 'id.ayushkryadav@gmail.com',
    react: template,
  });

  if (error) {
    console.log(error.message);
    return { errorMessage: error.message, error: true };
  } else {
    return { data, error: false };
  }
}
