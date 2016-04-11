var path = require('path');

module.exports = {
  description: 'Generates a component integration or unit test.',

  availableOptions: [
    {
      name: 'test-type',
      type: ['integration', 'unit'],
      default: 'integration',
      aliases:[
        { 'i': 'integration'},
        { 'u': 'unit'},
        { 'integration': 'integration' },
        { 'unit': 'unit' }
      ]
    }
  ],

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('component-test');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  locals: function(options) {
    var blueprint = this.lookupBlueprint('component-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
