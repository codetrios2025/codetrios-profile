// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "codetrio2025@gmail.com",
    pass: "wabx badx dgjf gpks", // Gmail App Password
  },
});

module.exports = { transporter };
