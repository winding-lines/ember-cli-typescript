var fs          = require('fs');
var path        = require('path');
var stringUtil  = require('../../lib/utilities/string');
var SilentError = require('../../lib/errors/silent');

module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    { name: 'base-class', type: String }
  ],

  locals: function() {
    var blueprint = this.lookupBlueprint('adapter');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
