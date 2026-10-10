/*!
 * CodeTrios website chatbot — single-file embeddable widget (no dependencies).
 *
 * Embed on every page, just before </body>:
 *   <script src="/codetrios-chatbot.js" defer></script>
 *
 * Everything you are likely to edit lives in CONFIG below.
 */
(function (root) {
  "use strict";

  /* ------------------------------------------------------------------ *
   * CONFIG — edit this block
   * ------------------------------------------------------------------ */
  var CONFIG = {
    botName: "CodeTrios Assistant",
    company: "CodeTrios",
    site: "https://www.codetrios.com",
    accent: "#4f46e5", // brand colour of the launcher, header and buttons

    // Fill these in. Anything left empty is never shown to visitors;
    // the bot sends them to the contact page instead.
    contact: {
      email: "info@codetrios.com",
      phone: "",        // e.g. "+91 00000 00000"
      whatsapp: "",     // e.g. "https://wa.me/910000000000"
      hours: "",        // e.g. "Mon–Sat, 10am–7pm IST"
      page: "https://www.codetrios.com/contact-us"
    },

    // Where captured leads go. Options (first one set wins):
    //  1. leadEndpoint: URL that accepts a JSON POST (Formspree, Zapier,
    //     Make, Google Apps Script, your own API...)
    //  2. leadEmail:    opens the visitor's mail app with a prefilled message
    //  3. neither:      lead is shown back to the visitor and sent to contact page
    leadEndpoint: "",
    leadEmail: "info@codetrios.com",

    greeting:
      "Hi! I'm the CodeTrios assistant. I can tell you about our services, " +
      "how we work, or help you get a quote. What are you looking for?",

    quickReplies: ["Our services", "Get a quote", "Technologies", "Contact us"]
  };

  /* ------------------------------------------------------------------ *
   * KNOWLEDGE BASE — one entry per topic.
   * `keys` are matched against the visitor's message (lowercased).
   * Longer / rarer keys score higher. Edit the `answer` text freely.
   * The service pages are taken from codetrios.com's sitemap; refine
   * the descriptions so they match what you actually offer.
   * ------------------------------------------------------------------ */
  var P = CONFIG.site + "/";
  var KB = [
    {
      id: "services",
      keys: ["services", "what do you do", "what do you offer", "offer", "what can you build", "capabilities", "solutions"],
      answer:
        "We help businesses get online and grow. Our main services are:\n" +
        "• Website design\n• Web development\n• Web application development\n" +
        "• UI/UX design\n• E-commerce development\n• Custom software solutions\n" +
        "• Digital strategy consulting\n• Web hosting\n• GEO & SEO\n\n" +
        "Tell me which one interests you and I'll share more.",
      links: [["All services", P + "services"]],
      replies: ["Website design", "E-commerce", "Custom software", "Get a quote"]
    },
    {
      id: "design",
      keys: ["website design", "web design", "design a website", "new website", "redesign", "landing page", "website look"],
      answer:
        "Our website design service creates modern, responsive sites that reflect your brand and are built to turn visitors into customers. " +
        "It works for new sites and for redesigns of an existing one.",
      links: [["Website design", P + "website-design-services"]],
      replies: ["UI/UX design", "Web development", "Get a quote"]
    },
    {
      id: "webdev",
      keys: ["web development", "website development", "develop a website", "developer", "build a website", "coding", "front end", "frontend", "backend", "back end"],
      answer:
        "Our web development team builds fast, secure and maintainable websites, from business sites to larger platforms.",
      links: [["Web development", P + "web-development-services"]],
      replies: ["Web applications", "Technologies", "Get a quote"]
    },
    {
      id: "webapp",
      keys: ["web application", "web app", "webapp", "portal", "dashboard", "saas", "crm", "admin panel", "platform"],
      answer:
        "We build custom web applications such as portals, dashboards, booking systems and internal tools, designed around your workflow.",
      links: [["Web application development", P + "web-application-development"]],
      replies: ["Custom software", "Technologies", "Get a quote"]
    },
    {
      id: "uiux",
      keys: ["ui", "ux", "ui/ux", "user experience", "user interface", "wireframe", "prototype", "figma", "mockup"],
      answer:
        "Our UI/UX design service covers research, wireframes, prototypes and polished interfaces, so your product is easy and pleasant to use.",
      links: [["UI/UX design", P + "ui-ux-design-services"]],
      replies: ["Website design", "Web applications", "Get a quote"]
    },
    {
      id: "ecom",
      keys: ["ecommerce", "e-commerce", "online store", "online shop", "shopify", "woocommerce", "magento", "sell online", "payment", "cart", "store"],
      answer:
        "We develop e-commerce stores that are easy to manage and ready to take payments, with product catalogues, carts and checkout built around your business.",
      links: [["E-commerce development", P + "ecommerce-development-services"]],
      replies: ["Web hosting", "GEO & SEO", "Get a quote"]
    },
    {
      id: "custom",
      keys: ["custom software", "software", "bespoke", "automation", "automate", "erp", "integration", "api", "internal tool", "mobile app", "app development"],
      answer:
        "If off-the-shelf tools don't fit, we design custom software around how your business actually works: automation, integrations, internal systems and more.",
      links: [["Custom software solutions", P + "custom-software-solutions"]],
      replies: ["Web applications", "Digital strategy", "Get a quote"]
    },
    {
      id: "strategy",
      keys: ["strategy", "consulting", "consultation", "consultant", "digital transformation", "roadmap", "advice", "plan my"],
      answer:
        "Not sure where to start? Our digital strategy consulting helps you decide what to build, in what order, and how to measure whether it works.",
      links: [["Digital strategy consulting", P + "digital-strategy-consulting"]],
      replies: ["Our services", "Get a quote"]
    },
    {
      id: "hosting",
      keys: ["hosting", "host", "domain", "server", "uptime", "ssl", "maintenance", "support", "backup", "migrate"],
      answer:
        "We offer web hosting so your site stays fast, secure and online without you having to manage servers yourself.",
      links: [["Web hosting", P + "web-hosting-services"]],
      replies: ["E-commerce", "Get a quote"]
    },
    {
      id: "seo",
      keys: ["seo", "geo", "search engine", "google ranking", "rank", "ranking", "traffic", "ai search", "chatgpt", "visibility", "keywords", "generative engine"],
      answer:
        "Our GEO & SEO service helps your business get found, both in traditional search results and in AI-powered answer engines.",
      links: [["GEO & SEO services", P + "geo-seo-services"]],
      replies: ["Website design", "Digital strategy", "Get a quote"]
    },
    {
      id: "tech",
      keys: ["technology", "technologies", "tech stack", "stack", "react", "node", "wordpress", "php", "python", "angular", "vue", "next", "laravel", "framework", "language"],
      answer:
        "We work with a modern web stack and pick the right tools for each project rather than forcing one technology on everyone. " +
        "The full list is on our technologies page.",
      links: [["Technologies", P + "technologies"]],
      replies: ["Our services", "Get a quote"]
    },
    {
      id: "portfolio",
      keys: ["portfolio", "previous work", "past work", "examples", "case study", "case studies", "clients", "projects you", "sample", "work you have done"],
      answer: "You can see examples of our work on our portfolio page.",
      links: [["Portfolio", P + "portfolio"]],
      replies: ["Our services", "Get a quote"]
    },
    {
      id: "about",
      keys: ["about", "who are you", "who is codetrios", "company", "team", "your story", "background", "experience"],
      answer:
        "CodeTrios is a web design and development company that builds websites, web applications and digital growth solutions for businesses. " +
        "You can read more about us on our About page.",
      links: [["About us", P + "about-us"]],
      replies: ["Our services", "Portfolio", "Contact us"]
    },
    {
      id: "pricing",
      keys: ["price", "pricing", "cost", "how much", "budget", "rates", "charges", "quote", "estimate", "affordable", "cheap", "fee", "fees", "package"],
      answer:
        "Pricing depends on scope: the number of pages or features, design complexity and integrations. " +
        "The quickest way to get an accurate number is a free quote. Want me to take a few details?",
      replies: ["Get a quote", "Our services"]
    },
    {
      id: "timeline",
      keys: ["how long", "timeline", "turnaround", "deadline", "delivery", "how soon", "duration", "weeks", "time to build", "time frame", "timeframe"],
      answer:
        "Timelines depend on the project. A simple business site is much quicker than a custom web app or store. " +
        "Share your requirements and we'll give you a realistic schedule with your quote.",
      replies: ["Get a quote", "Contact us"]
    },
    {
      id: "process",
      keys: ["process", "how do you work", "how does it work", "workflow", "steps", "methodology", "start a project", "getting started", "get started"],
      answer:
        "A typical project goes: discuss your goals → plan and design → build and review with you → test and launch → ongoing support. " +
        "The first step is simply telling us what you need.",
      replies: ["Get a quote", "Contact us"]
    }
  ];

  var INTENTS = {
    greet: /^(hi|hii+|hello|hey|hola|namaste|good (morning|afternoon|evening)|yo|sup)\b/,
    thanks: /\b(thanks|thank you|thx|ty|appreciate)\b/,
    bye: /^(bye|goodbye|see you|cya|that'?s all|no thanks?)\b/,
    human: /\b(human|real person|agent|representative|talk to someone|call me|speak to)\b/,
    lead: /\b(get a quote|free quote|quote|start a project|hire you|hire us|work with you|proposal|consultation|book a call|schedule a call|get in touch|enquiry|inquiry)\b/,
    contact: /\b(contact|email|e-mail|phone|call|whatsapp|address|reach|location|office|hours|open)\b/
  };

  /* ------------------------------------------------------------------ *
   * BOT BRAIN — pure functions, no DOM (so they can be unit-tested)
   * ------------------------------------------------------------------ */
  function normalise(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9/'+\-\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hasKey(text, key) {
    // whole-word / whole-phrase match; short keys like "ui" must not match "build"
    return new RegExp("(^|[^a-z0-9])" + escapeRegExp(key) + "s?($|[^a-z0-9])").test(text);
  }

  function bestTopic(text) {
    var best = null, bestScore = 0, i, j;
    for (i = 0; i < KB.length; i++) {
      var score = 0;
      for (j = 0; j < KB[i].keys.length; j++) {
        var k = KB[i].keys[j];
        if (hasKey(text, k)) score += 1 + k.split(" ").length * 1.5 + Math.min(k.length, 12) / 12;
      }
      if (score > bestScore) { bestScore = score; best = KB[i]; }
    }
    return bestScore >= 1.5 ? best : null;
  }

  function contactAnswer() {
    var c = CONFIG.contact, lines = [], links = [];
    if (c.email) lines.push("Email: " + c.email);
    if (c.phone) lines.push("Phone: " + c.phone);
    if (c.hours) lines.push("Hours: " + c.hours);
    if (c.whatsapp) links.push(["Chat on WhatsApp", c.whatsapp]);
    links.push(["Contact page", c.page]);
    return {
      text: (lines.length ? "Here's how to reach us:\n" + lines.join("\n") + "\n\n" : "") +
        "You can also send us a message through the contact page, or leave your details here and the team will get back to you.",
      links: links,
      replies: ["Get a quote", "Our services"]
    };
  }

  // Returns { text, links, replies, action } for a visitor message.
  function respond(raw) {
    var text = normalise(raw);
    if (!text) return { text: "Could you type your question again?", replies: CONFIG.quickReplies };

    if (INTENTS.human.test(text)) {
      var c = contactAnswer();
      c.text = "Of course, you can speak to our team directly.\n\n" + c.text;
      return c;
    }
    if (INTENTS.lead.test(text)) {
      return { action: "lead", text: "Great, I'll just need a few details so the team can prepare a proper quote." };
    }
    if (INTENTS.bye.test(text)) {
      return { text: "Thanks for stopping by! I'm here whenever you need me." };
    }
    if (INTENTS.thanks.test(text)) {
      return { text: "You're welcome! Anything else I can help with?", replies: ["Our services", "Get a quote"] };
    }

    var topic = bestTopic(text);
    if (topic) return { text: topic.answer, links: topic.links, replies: topic.replies };

    if (INTENTS.contact.test(text)) return contactAnswer();
    if (INTENTS.greet.test(text)) return { text: "Hello! How can I help you today?", replies: CONFIG.quickReplies };

    return {
      text:
        "I'm not sure I have a good answer to that. I can help with our services, technologies, pricing and how we work, " +
        "or I can pass your question to the team.",
      replies: ["Our services", "Get a quote", "Contact us"]
    };
  }

  var LEAD_STEPS = [
    { field: "name", ask: "What's your name?",
      check: function (v) { return v.length >= 2; }, err: "Please enter your name." },
    { field: "email", ask: "Thanks! What's the best email to reach you on?",
      check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); },
      err: "That doesn't look like a valid email. Could you check it?" },
    { field: "phone", ask: "Phone number (optional, type “skip” to leave it out)?",
      check: function (v) { return /^skip$/i.test(v) || v.replace(/\D/g, "").length >= 7; },
      err: "Please enter a valid phone number, or type “skip”.", optional: true },
    { field: "project", ask: "Briefly, what would you like us to build or help with?",
      check: function (v) { return v.length >= 5; }, err: "A short description helps us a lot. Could you add a little more?" }
  ];

  /* ------------------------------------------------------------------ *
   * UI
   * ------------------------------------------------------------------ */
  function init() {
    if (typeof document === "undefined" || document.getElementById("ct-bot")) return;

    var css =
      "#ct-bot,#ct-bot *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif}" +
      "#ct-bot{--a:" + CONFIG.accent + ";position:fixed;right:20px;bottom:20px;z-index:2147483000;font-size:14px;line-height:1.45;color:#1f2937}" +
      "#ct-launch{width:58px;height:58px;border-radius:50%;border:0;background:var(--a);color:#fff;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;transition:transform .15s}" +
      "#ct-launch:hover{transform:scale(1.07)}#ct-launch:focus-visible,#ct-send:focus-visible,#ct-input:focus-visible{outline:3px solid #fbbf24;outline-offset:2px}" +
      "#ct-win{position:absolute;right:0;bottom:72px;width:370px;max-width:calc(100vw - 24px);height:540px;max-height:calc(100vh - 110px);background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.28);display:none;flex-direction:column;overflow:hidden}" +
      "#ct-bot.open #ct-win{display:flex;animation:ctin .18s ease-out}@keyframes ctin{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}" +
      "#ct-head{background:var(--a);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}" +
      "#ct-head b{display:block;font-size:15px}#ct-head small{opacity:.85;font-size:12px}" +
      "#ct-dot{width:9px;height:9px;border-radius:50%;background:#4ade80;flex:none}" +
      "#ct-close{margin-left:auto;background:none;border:0;color:#fff;font-size:22px;cursor:pointer;line-height:1;padding:4px 8px}" +
      "#ct-log{flex:1;overflow-y:auto;padding:14px;background:#f8fafc;display:flex;flex-direction:column;gap:8px}" +
      ".ct-m{max-width:86%;padding:9px 12px;border-radius:14px;white-space:pre-wrap;word-wrap:break-word}" +
      ".ct-b{background:#fff;border:1px solid #e5e7eb;border-bottom-left-radius:4px;align-self:flex-start}" +
      ".ct-u{background:var(--a);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}" +
      ".ct-l{display:block;margin-top:6px;color:var(--a);font-weight:600;text-decoration:none}.ct-l:hover{text-decoration:underline}" +
      ".ct-qr{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:96%}" +
      ".ct-qr button{background:#fff;border:1px solid var(--a);color:var(--a);border-radius:999px;padding:6px 12px;cursor:pointer;font-size:13px}" +
      ".ct-qr button:hover{background:var(--a);color:#fff}" +
      ".ct-typing{display:flex;gap:4px;padding:12px}.ct-typing i{width:7px;height:7px;border-radius:50%;background:#9ca3af;animation:ctb 1s infinite}" +
      ".ct-typing i:nth-child(2){animation-delay:.15s}.ct-typing i:nth-child(3){animation-delay:.3s}@keyframes ctb{0%,60%,100%{transform:none}30%{transform:translateY(-4px)}}" +
      "#ct-form{display:flex;gap:8px;padding:10px;border-top:1px solid #e5e7eb;background:#fff}" +
      "#ct-input{flex:1;border:1px solid #d1d5db;border-radius:999px;padding:10px 14px;font-size:14px;min-width:0}" +
      "#ct-send{background:var(--a);color:#fff;border:0;border-radius:999px;padding:0 16px;cursor:pointer;font-weight:600}" +
      "#ct-foot{text-align:center;font-size:11px;color:#9ca3af;padding:0 0 6px;background:#fff}" +
      "@media(max-width:480px){#ct-bot{right:12px;bottom:12px}#ct-win{position:fixed;inset:0;width:100%;max-width:none;height:100%;max-height:none;border-radius:0}}" +
      "@media(prefers-reduced-motion:reduce){#ct-bot *{animation:none!important;transition:none!important}}";

    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var wrap = document.createElement("div");
    wrap.id = "ct-bot";
    wrap.innerHTML =
      '<div id="ct-win" role="dialog" aria-label="' + CONFIG.botName + '">' +
        '<div id="ct-head"><span id="ct-dot"></span><div><b>' + CONFIG.botName + "</b><small>Typically replies instantly</small></div>" +
        '<button id="ct-close" aria-label="Close chat">&times;</button></div>' +
        '<div id="ct-log" role="log" aria-live="polite"></div>' +
        '<form id="ct-form" autocomplete="off"><input id="ct-input" type="text" placeholder="Type your message…" aria-label="Message" maxlength="500">' +
        '<button id="ct-send" type="submit">Send</button></form>' +
        '<div id="ct-foot">Automated assistant · ' + CONFIG.company + "</div>" +
      "</div>" +
      '<button id="ct-launch" aria-label="Open chat" aria-expanded="false">' +
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      "</button>";
    document.body.appendChild(wrap);

    var $ = function (id) { return document.getElementById(id); };
    var log = $("ct-log"), input = $("ct-input"), launch = $("ct-launch");
    var lead = null; // active lead-capture state
    var started = false;

    function scroll() { log.scrollTop = log.scrollHeight; }
    function clearReplies() {
      var q = log.querySelectorAll(".ct-qr");
      for (var i = 0; i < q.length; i++) q[i].remove();
    }

    function addMsg(text, who, links) {
      var d = document.createElement("div");
      d.className = "ct-m " + (who === "u" ? "ct-u" : "ct-b");
      d.textContent = text; // textContent: visitor input can never inject HTML
      if (links) {
        links.forEach(function (l) {
          var a = document.createElement("a");
          a.className = "ct-l"; a.href = l[1]; a.textContent = l[0] + " →";
          a.target = "_blank"; a.rel = "noopener";
          d.appendChild(a);
        });
      }
      log.appendChild(d); scroll();
    }

    function addReplies(list) {
      if (!list || !list.length) return;
      var d = document.createElement("div"); d.className = "ct-qr";
      list.forEach(function (t) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = t;
        b.onclick = function () { handle(t); };
        d.appendChild(b);
      });
      log.appendChild(d); scroll();
    }

    function botSay(r, delay) {
      var t = document.createElement("div"); t.className = "ct-m ct-b ct-typing";
      t.innerHTML = "<i></i><i></i><i></i>"; log.appendChild(t); scroll();
      setTimeout(function () {
        t.remove();
        addMsg(r.text, "b", r.links);
        addReplies(r.replies);
        if (r.after) r.after();
      }, delay == null ? 450 : delay);
    }

    function startLead() {
      lead = { step: 0, data: {} };
      botSay({ text: "Great, I'll just need a few details so the team can prepare a proper quote.\n\n" + LEAD_STEPS[0].ask });
    }

    function finishLead() {
      var d = lead.data; lead = null;
      var summary = "Name: " + d.name + "\nEmail: " + d.email + "\nPhone: " + d.phone + "\nProject: " + d.project;
      var done = function (msg) {
        botSay({ text: msg, replies: ["Our services", "Contact us"] });
      };
      var payload = {
        name: d.name, email: d.email, phone: d.phone, project: d.project,
        page: location.href, source: "codetrios-chatbot", sentAt: new Date().toISOString()
      };
      if (CONFIG.leadEndpoint) {
        fetch(CONFIG.leadEndpoint, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        }).then(function (res) {
          if (!res.ok) throw new Error("bad status");
          done("Thank you, " + d.name + "! Your request has been sent and the team will reply to " + d.email + " soon.");
        }).catch(function () {
          done("Sorry, I couldn't send that just now. Please use our contact page and include:\n\n" + summary);
        });
      } else if (CONFIG.leadEmail) {
        done("Thanks, " + d.name + "! I've prepared an email to our team. Press send in your mail app to complete your request.");
        setTimeout(function () {
          location.href = "mailto:" + CONFIG.leadEmail + "?subject=" + encodeURIComponent("Quote request from website chatbot") +
            "&body=" + encodeURIComponent(summary + "\n\nPage: " + location.href);
        }, 900);
      } else {
        done("Thanks, " + d.name + "! Here is what I have:\n\n" + summary +
          "\n\nPlease share it through our contact page so the team receives it.");
        // surface the contact link
        setTimeout(function () { addMsg("Open the contact page", "b", [["Contact us", CONFIG.contact.page]]); }, 1200);
      }
    }

    function handle(text) {
      text = String(text || "").trim();
      if (!text) return;
      clearReplies();
      addMsg(text, "u");

      if (lead) {
        var step = LEAD_STEPS[lead.step];
        if (/^(cancel|stop|never ?mind|exit)$/i.test(text)) {
          lead = null;
          return botSay({ text: "No problem, I've cancelled that. Anything else I can help with?", replies: CONFIG.quickReplies });
        }
        if (!step.check(text)) return botSay({ text: step.err });
        lead.data[step.field] = /^skip$/i.test(text) && step.optional ? "not provided" : text;
        lead.step++;
        if (lead.step < LEAD_STEPS.length) return botSay({ text: LEAD_STEPS[lead.step].ask });
        return finishLead();
      }

      var r = respond(text);
      if (r.action === "lead") return startLead();
      botSay(r);
    }

    function open(v) {
      wrap.classList.toggle("open", v);
      launch.setAttribute("aria-expanded", String(v));
      launch.setAttribute("aria-label", v ? "Close chat" : "Open chat");
      if (v) {
        if (!started) { started = true; botSay({ text: CONFIG.greeting, replies: CONFIG.quickReplies }, 300); }
        setTimeout(function () { input.focus(); }, 50);
      }
    }

    launch.onclick = function () { open(!wrap.classList.contains("open")); };
    $("ct-close").onclick = function () { open(false); launch.focus(); };
    $("ct-form").onsubmit = function (e) { e.preventDefault(); var v = input.value; input.value = ""; handle(v); };
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && wrap.classList.contains("open")) open(false);
    });
  }

  /* ------------------------------------------------------------------ */
  var api = { CONFIG: CONFIG, KB: KB, respond: respond, LEAD_STEPS: LEAD_STEPS, init: init };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.CodeTriosBot = api;

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
  }
})(typeof window !== "undefined" ? window : this);
