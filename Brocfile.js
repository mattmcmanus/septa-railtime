/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'babel': {
    comments: false
  }
});

app.import(app.bowerDirectory + '/normalize.css/normalize.css');
app.import(app.bowerDirectory + '/ember-cli-moment-shim/moment-shim.js', {
  exports: {
    moment: ['default']
  }
});

module.exports = app.toTree();
