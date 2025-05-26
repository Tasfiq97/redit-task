const express = require('express');
const router = express.Router();
const axios = require('axios');
const SWAPI_BASE_URL = 'https://www.swapi.tech/api';

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${SWAPI_BASE_URL}/planets/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch planet' });
  }
});
module.exports = router;
