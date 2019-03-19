const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibmNhbGliZXkiLCJhIjoiY2p0ZHRseWZjMDMydzN5bWhzc3VseWR2dSJ9.1EGbzd62kH1L-mrxb3Y1yw&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!');
    } else if (body.features.length === 0) {
      callback('No matching results found. Please try another search.');
    } else {
      const data = body.features[0];

      callback(null, {
        latitude: data.center[1],
        longitude: data.center[0],
        location: data.place_name,
      });
    }
  });
};

module.exports = geocode;
