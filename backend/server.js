const express = require('express');
const axios = require('axios');
const cors = require('cors');
const axiosRetry = require('axios-retry');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Configure axios-retry
axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

app.get('/api/profile', async (req, res) => {
  console.log('Received request for /api/profile');
  try {
    const response = await axios({
      method: 'get',
      url: 'https://www.naukri.com/code360/profile/srijanarya',
      timeout: 60000, // 60 seconds timeout
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });
    console.log('Fetched data from Naukri.com');
    const html = response.data;
    res.json({ html });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
