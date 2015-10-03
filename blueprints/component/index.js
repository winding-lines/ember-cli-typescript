module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases:[
        {'no-path': ''}
      ]
    }
  ],

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('component');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  normalizeEntityName: function() {
    var blueprint = this.lookupBlueprint('component');
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = this.lookupBlueprint('component');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
