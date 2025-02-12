import { EmailTemplate, IEmail } from '@/components/EmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

/*const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);*/
const resend = new Resend("re_Byym8o1H_E4SbWhzMWVmBJy6oTqfDRufB");

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    const { name, email, message} = req.body as IEmail;
    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['matheusclementeg@gmail.com', 'fernando.forneas@gmail.com'],
        subject: 'Contact from website',
        react: EmailTemplate({ name: name, email: email, message: message }),
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    return res.status(500).json({
      error: 'Server error'
    })
  }
  
}
