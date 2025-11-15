const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

const MESSAGES_FILE = path.join(__dirname, "messages.json");

app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------

app.post("/api/contact", function (request, response) {
  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ success: false, error: "Missing fields" });
  }

  console.log("Dobil sem podatke:", request.body);

  let messages = [];

  if (fs.existsSync(MESSAGES_FILE)) {
    try {
      const fileData = fs.readFileSync(MESSAGES_FILE, "utf8");
      if (fileData.trim() !== "") {
        messages = JSON.parse(fileData);
      }
    } catch (err) {
      console.error("Napaka pri branju datoteke:", err);
    }
  }

  const newMessage = {
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);

  try {
    fs.writeFileSync(
      MESSAGES_FILE,
      JSON.stringify(messages, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("Napaka pri pisanju datoteke:", err);
    return res
      .status(500)
      .json({ success: false, error: "Failed to save message" });
  }

  response.json({ success: true });
});





app.listen(PORT, () => {
  console.log(`Server teče na http://localhost:${PORT}`);
});
