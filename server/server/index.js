const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const peopleRoutes = require('./routes/people');
const planetsRoutes = require('./routes/planets');
const speciesRoutes = require('./routes/species');
const filmsRoutes = require('./routes/films');

app.use(cors());
// Middleware to handle JSON requests

app.use('/api/people', peopleRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/films', filmsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
