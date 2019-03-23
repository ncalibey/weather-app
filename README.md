![version 1.0.0](https://img.shields.io/badge/version-1.0.0-orange.svg)

# Weather
This is a simple web application that takes the name of a location and returns the current weather using data from [mapbox](https://mapbox.com) and [darksky](https://darksky.net). The backend was implemented using ExpressJS. It is part of [Andrew Mead's](https://mead.io) NodeJS [Udemy course](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/).

## Running the Application
[![view on Heroku](https://img.shields.io/badge/View%20on-heroku-blueviolet.svg?logo=heroku&style=for-the-badge)](https://ncalibey-weather-app.herokuapp.com)

To install, clone the repo and then run `npm i`. You can then use `npm run dev` to run the application using nodemon, or `npm run start` to run it normally.

When looking for a location, you can be more precise to refine your search. For example, entering `Dublin` will return the weather for Dublin Ireland. However, entering `Dublin, Pennsylvania` will return the weather info for Dublin, PA.
