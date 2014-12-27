/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  '6to5': {
    // disable comments
    comments: false
  },
  sassOptions: {
    includePaths: [
      'bower_components/bourbon/dist',
      'bower_components/neat/app/assets/stylesheets',
    ]
  }
});

app.import('bower_components/momentjs/moment.js');

module.exports = app.toTree();
