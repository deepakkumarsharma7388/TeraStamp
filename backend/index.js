import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import {
  sendContactEmail,
  sendThankYouEmail,
} from "./mailer.js";

import { saveLead } from "./sheets.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const {
    name,
    email,
    company,
    industry,
    message,
  } = req.body || {};

  // Validation
  if (!name || !email) {
    return res.status(400).json({
      error: "Name and Email are required.",
    });
  }

  try {
    // Save data in Google Sheet
    await saveLead({
      formType: "Contact Form",
      name,
      email,
      company,
      message,
    });

    // Respond immediately to frontend
    res.status(200).json({
      ok: true,
      message: "Form submitted successfully.",
    });

    // -----------------------------
    // Send Admin Notification Email
    // -----------------------------
    sendContactEmail({
      name,
      email,
      company,
      industry,
      message,
    }).catch((err) => {
      console.error("Admin Email Error:", err);
    });

    // -----------------------------
    // Send Thank You Email to User
    // -----------------------------
    sendThankYouEmail({
      name,
      email,
    }).catch((err) => {
      console.error("Thank You Email Error:", err);
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    message: "Server is running.",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});