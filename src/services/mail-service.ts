import { createTransport, Transporter } from "nodemailer";

export default class MailService {
  private transporter: Transporter;
  private admins: string[] = ["info@cybersafe.live"];
  private supportEmails!: string;

  constructor() {
    this.transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    this.supportEmails = process.env.SUPPORT_EMAILS || "";
  }

  async sendSupportRequest(support: string) {
    await this.transporter.sendMail({
      to: this.supportEmails,
      subject: "Digis Support Request",
      text: support,
    });
  }
}
