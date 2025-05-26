const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
const PORT = 5000;
const peopleRoutes = require('./server/routes/people');
const planetsRoutes = require('./server/routes/planets');
const speciesRoutes = require('./server/routes/species');
const filmsRoutes = require('./server/routes/films');

app.use(cors());
// Middleware to handle JSON requests
// app.get('/', (req, res) => {
//   res.send('Backend running!');
// });
app.use('/api/people', peopleRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/films', filmsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
