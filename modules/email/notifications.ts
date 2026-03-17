import { transporter } from "./mailer"
import { quoteRequestTemplate, quoteAcceptedTemplate } from "./templates"

export async function notifyProvider(quote:any){

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: quote.establishment.owner.email,

    subject: "Nueva solicitud de cita",

    html: quoteRequestTemplate(quote)

  })

}

export async function notifyClientAccepted(quote:any){

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: quote.client.email,

    subject: "Cita confirmada",

    html: quoteAcceptedTemplate(quote)

  })

}