'use strict';
var path      = require('path');
var checker   = require('ember-cli-version-checker');

var TypeScriptPreprocessor = require('./lib/typescript-preprocessor')

module.exports = {
  name: 'ember-cli-typescript',

  included: function(app) {
    this.app = app;

    if (this.shouldSetupRegistryInIncluded()) {
      this.setupPreprocessorRegistry('parent', app.registry);
    }
  },

  // TODO: Blueprints

  setupPreprocessorRegistry: function(type, registry) {
    var plugin = new TypeScriptPreprocessor(); // TODO: Config
    registry.add('js', plugin);
  },

  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  },
};
