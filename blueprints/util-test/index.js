module.exports = {
  description: 'Generates a util unit test.',
  locals: function() {
    var blueprint = this.lookupBlueprint('util-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
