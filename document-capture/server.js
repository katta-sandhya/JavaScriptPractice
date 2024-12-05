const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('document'), async (req, res) => {
  try {
    const { path } = req.file;
    const { data: { text } } = await Tesseract.recognize(path, 'eng');

    // Extract fields using regex
    const name = text.match(/Name:\s*([A-Za-z\s]+)/)?.[1];
    const documentNumber = text.match(/Document No:\s*(\w+)/)?.[1];
    const expirationDate = text.match(/Expiry Date:\s*(\d{2}\/\d{2}\/\d{4})/)?.[1];

    res.json({ name, documentNumber, expirationDate });
  } catch (error) {
    res.status(500).json({ message: 'Error processing document', error });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
