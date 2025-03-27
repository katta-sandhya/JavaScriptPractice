const express = require("express");
const { google } = require("googleapis");
const multer = require("multer");

const router = express.Router();
const upload = multer();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

router.post("/save", upload.none(), async (req, res) => {
  try {
    const drive = google.drive({ version: "v3", auth: oauth2Client });
    const response = await drive.files.create({
      requestBody: {
        name: "Letter.doc",
        mimeType: "application/vnd.google-apps.document",
      },
      media: {
        mimeType: "text/plain",
        body: req.body.content,
      },
    });
    res.json({ success: true, fileId: response.data.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
