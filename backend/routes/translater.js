// routes/translate.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { text, to } = req.body;

  try {
    const response = await axios.post(
      'http://localhost:5000/translate',
      {
        q: text,
        source: 'en',
        target: to,
        format: 'text'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ translated: response.data.translatedText });
  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).json({ error: 'Translation failed' });
  }
});

module.exports = router;
