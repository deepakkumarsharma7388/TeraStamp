import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";
import serviceAccount from "./service-account.json" with { type: "json" };



const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function saveLead(data) {
  const client = await auth.getClient();

  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
  });

  console.log(
    "Spreadsheet Title:",
    spreadsheet.data.properties.title
  );

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        new Date().toLocaleString(),
        data.formType,
        data.name,
        data.email,
        data.company,
        data.message,
      ]],
    },
  });
}