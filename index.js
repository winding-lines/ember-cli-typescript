'use strict';
var path      = require('path');
var checker   = require('ember-cli-version-checker');
var TypeScriptPreprocessor = require('./lib/typescript-preprocessor')

module.exports = {
  name: 'ember-cli-typescript-compiler',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app = app;

    if (this.shouldSetupRegistryInIncluded()) {
      this.setupPreprocessorRegistry('parent', app.registry);
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  setupPreprocessorRegistry: function(type, registry) {
    var plugin = new TypeScriptPreprocessor({
      tsconfig: path.join(__dirname, 'tsconfig.json')
    }); // TODO: Merge external config
    registry.add('js', plugin);
  },

  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  }
};
