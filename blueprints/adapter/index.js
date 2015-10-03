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
