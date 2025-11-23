const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// POST /api/translate
router.post('/', async (req, res) => {
  const { text, targetLang, sourceLang = 'en' } = req.body;

  try {
    const response = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text'
      })
    });

    const data = await response.json();
    res.json({ translatedText: data.translatedText });
  } catch (error) {
    console.error('Translation error:', error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

module.exports = router;
