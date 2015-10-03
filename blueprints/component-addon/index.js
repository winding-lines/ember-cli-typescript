/*jshint node:true*/

var stringUtil         = require('ember-cli-string-utils');
var validComponentName = require('../../lib/utilities/valid-component-name');
var getPathOption      = require('../../lib/utilities/get-component-path-option');
var path               = require('path');
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  normalizeEntityName: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
