import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "codetrio2025@gmail.com",
    pass: "wabx badx dgjf gpks", // NOT Gmail password → use App Password
  },
});
