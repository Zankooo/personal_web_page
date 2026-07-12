// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// inicializacija Resend API-ja
const resend = new Resend(process.env.RESEND_API_KEY);


// healthcheck
app.get("/", (req, res) => {
  res.send("Backend za kontaktni obrazec deluje (Resend verzija).");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  if (!process.env.RESEND_API_KEY || !process.env.MAIL_TO) {
    console.error("Missing RESEND_API_KEY or MAIL_TO environment variable.");
    return res.status(500).json({ success: false, error: "Server is not configured" });
  }

  try {
    // pošlji email
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      subject: "Novo sporočilo iz kontaktnega obrazca",
      text: `Ime: ${name}
      Email: ${email}

      Sporočilo:
      ${message}
      `,
        reply_to: email,
      });

      if (error) {
        console.error("Resend napaka:", error);
        return res.status(500).json({ success: false, error: "Sending failed" });
      }

      console.log("Email poslan prek Resend.", data);
      res.json({ success: true });
    } 
    catch (error) {
    console.error("Resend napaka:", error);
    res.status(500).json({ success: false, error: "Sending failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server teče na http://localhost:${PORT}`);
});
