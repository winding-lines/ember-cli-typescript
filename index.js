'use strict';
var path      = require('path');
var checker   = require('ember-cli-version-checker');
var defaults  = require('lodash').defaults;

var TypeScriptPreprocessor = require('./lib/typescript-preprocessor');

module.exports = {
  name: 'Ember CLI TypeScript Addon',

  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  },

  getConfig: function() {
    var brocfileConfig = {};
    var typeScriptOptions = defaults(this.project.config(process.env.EMBER_ENV).typeScriptOptions || {},
      brocfileConfig, {
        blueprints: true
      });

    return typeScriptOptions;
  },

  blueprintsPath: function() {
    if (this.getConfig().blueprints) {
      return path.join(__dirname, 'blueprints');
    }
  },

  setupPreprocessorRegistry: function(type, registry) {
    var plugin = new TypeScriptPreprocessor(this.getConfig());

    registry.add('js', plugin);
  }
};
