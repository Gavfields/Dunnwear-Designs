import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(422).json({ error: "Missing required fields" });
  }

  if (name.length > 50 || email.length > 254 || message.length > 2000) {
    return res
      .status(400)
      .json({ error: "One or more fields exceed the maximum length" });
  }

  try {
    await sendgrid.send({
      to: process.env.CONTACT_US_EMAIL_RECIPIENT,
      from: "dunnweardesign@gmail.com",
      subject: `Dunnwear Contact Request`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
  } catch (error: any) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message || "Internal Server Error" });
  }

  res.status(204).end();
};
