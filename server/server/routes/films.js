const express = require('express');
const router = express.Router();
const axios = require('axios');
const SWAPI_BASE_URL = 'https://www.swapi.tech/api';

// Get all films
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/films`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching films:', error.message);
    res.status(500).json({ error: 'Failed to fetch films' });
  }
});

// Get film by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${SWAPI_BASE_URL}/films/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching film by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch film' });
  }
});
module.exports = router;
