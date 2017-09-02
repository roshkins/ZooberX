'use strict';

module.exports = function(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */
  function randomInRange(lower, upper) {
    return (upper - lower) * Math.random() + lower;
  }
  function generateBeests() {
    const beest = app.models.wildebeest;
    const beestNames = [
      'Abe',
      'Tony',
      'Dan',
      'Robert',
      'Moses',
      'Dana',
      'Sandra',
      'Michelle',
      'Beth',
      'Ashley',
    ];
    beestNames.forEach(name => {
      beest.upsertWithWhere(
        {name},
        {
          latitude: '' + randomInRange(-3.60345, -1.261154),
          longitude: '' + randomInRange(34.732605, 34.997316),
          name: name,
          direction: Math.random() < 0.5 ? 'Kenya' : 'Tanzania',
        },
        () => ''
      );
    });
  }
  setInterval(generateBeests, 3000);
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};