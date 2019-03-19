const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/60139793146ad9280bda7d0e7c53a01b/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', null);
    } else if (body.error) {
      callback('Unable to find location.', null);
    } else {
      const { temperature, precipProbability } = body.currently;
      const summary = body.daily.data[0].summary;
      const msg = `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`;

      callback(null, msg);
    }
  });
};

module.exports = forecast;
