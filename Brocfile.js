/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'babel': {
    comments: false
  }
});

app.import('bower_components/normalize.css/normalize.css');

module.exports = app.toTree();
