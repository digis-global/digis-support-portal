import type { NextApiRequest, NextApiResponse } from "next";
import { METHODS } from "@/configs/constants/methods";
import MailService from "@/services/mail-service";

type Response = {
  success: boolean;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  switch (req.method) {
    case METHODS.POST:
      return POSTHandler(req, res);
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

async function POSTHandler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  try {
    const mailService = new MailService();
    await mailService.sendSupportRequest(
      req?.body?.support,
    );
    res.status(201).json({
      success: true,
      message: "Ticket Creation Success!",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error?.message ?? "Something Went Wrong!",
    });
  }
}
