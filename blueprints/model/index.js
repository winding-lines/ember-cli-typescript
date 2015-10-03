module.exports = {
  description: 'Generates an ember-data model.',

  anonymousOptions: [
    'name',
    'attr:type'
  ],

  locals: function() {
    var blueprint = this.lookupBlueprint('model');
    return blueprint.locals.apply(blueprint, arguments);
  }
};