const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Nastavitev Nodemailer transporterja – bere podatke iz ENV spremenljivk
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465", 10),
  secure: true, // true za port 465 (TLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST /api/contact – frontend pošlje ime, email, sporočilo
app.post("/api/contact", async function (request, response) {
  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response
      .status(400)
      .json({ success: false, error: "Manjkajoča polja" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Novo sporočilo iz kontakt obrazca od ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nSporočilo:\n${message}`,
    });

    response.json({ success: true });
  } catch (err) {
    console.error("Napaka pri pošiljanju emaila:", err);
    response
      .status(500)
      .json({ success: false, error: "Napaka pri pošiljanju emaila" });
  }
});

// Da imaš nekaj, če greš na root
app.get("/", function (request, response) {
  response.send("Backend za kontakt obrazec teče in pošilja emaile.");
});


// poslušamo na portu 
app.listen(PORT, () => {
  console.log(`Server teče na http://localhost:${PORT}`);
});
