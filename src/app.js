const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Nick Calibey',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Nick Calibey',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Nick Calibey',
    message: 'This is where you can find the API docs',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) return res.send({ error: 'You must provide an address' });

  const { address } = req.query;

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) return res.send({ error });

    forecast(latitude, longitude, (error, summary) => {
      if (error) return res.send({ error });

      res.send({
        address,
        forecast: summary,
        location
      });
    });
  });

});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Nick Calibey',
    message: 'Help article not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Nick Calibey',
    message: 'Page not found.',
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
