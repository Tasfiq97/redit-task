const express = require('express');
const router = express.Router();
const axios = require('axios');
const SWAPI_BASE_URL = 'https://www.swapi.tech/api';

// Get species by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${SWAPI_BASE_URL}/species/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching species by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch species' });
  }
});

module.exports = router;
