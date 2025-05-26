const express = require('express');
const router = express.Router();
const axios = require('axios');
const SWAPI_BASE_URL = 'https://www.swapi.tech/api';

router.get('/', async (req, res) => {
  try {
    const { page, name } = req.query;

    const swapiUrl = name
      ? `${SWAPI_BASE_URL}/people/?name=${name}`
      : `${SWAPI_BASE_URL}/people/?page=${page}&limit=10`;

    const response = await axios.get(swapiUrl);
    const data = response.data;

    if (Array.isArray(data.results)) {
      const formatted = {
        results: data.results.map((item) => ({
          uid: item.uid,
          name: item.name,
          url: item.url,
        })),
        total_pages: data.total_records,
      };
      return res.json(formatted);
    } else if (Array.isArray(data.result) && data.result.length > 0) {
      return res.json({
        results: data.result.map((item) => ({
          uid: item.uid,
          name: item.properties.name,
          url: item.properties.url,
        })),
        total_pages: Math.ceil(data.result.length / 10),
      });
    }
    if (Array.isArray(data.result) && data.result.length === 0) {
      return res.json({
        results: [],
        total_pages: 1,
        message: 'No characters found',
      });
    }
  } catch (error) {
    console.error('SWAPI fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from SWAPI' });
  }
});

// Get character by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching character by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch character' });
  }
});
module.exports = router;
