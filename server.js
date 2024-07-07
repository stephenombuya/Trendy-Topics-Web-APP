const express = require('express');
(async () => {
    const fetch = await import('node-fetch');
  })();
  
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAJHTugEAAAAAqGyRLJZwHuJhsVqHJ81gKRCYd2Q%3DSjFz7gff6yymGd789Wy6tZ8viqW0SSxVVIaqmMmhynqKzuKx98';

app.use(cors());

app.get('/api/woeid', async (req, res) => {
    try {
        const response = await fetch('https://api.twitter.com/1.1/trends/available.json', {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch WOEID' });
    }
});

app.get('/api/trends/:woeid', async (req, res) => {
    try {
        const response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=${req.params.woeid}`, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch trends' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
