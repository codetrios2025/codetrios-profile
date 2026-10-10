import { useEffect } from "react";

/**
 * Loads the CodeTrios chatbot once for the whole app.
 * Put codetrios-chatbot.js in your `public/` folder, then render <Chatbot />
 * once, e.g. at the bottom of App.js. The widget attaches itself to <body>,
 * so it stays open and keeps its conversation while visitors move between
 * React Router pages.
 */
export default function Chatbot() {
  useEffect(() => {
    // Already loaded (React StrictMode runs effects twice in development)
    if (window.CodeTriosBot || document.getElementById("codetrios-chatbot-script")) return;

    const s = document.createElement("script");
    s.id = "codetrios-chatbot-script";
    s.src = "/codetrios-chatbot.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null; // the widget draws its own UI
}
