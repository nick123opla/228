import { env } from "~/env.js";
import { Resend } from "resend";

export const resend = new Resend(env.RESEND_API_KEY || "re_123");
