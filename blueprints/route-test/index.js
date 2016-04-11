module.exports = {
  description: 'Generates a route unit test.',
  locals: function() {
    var blueprint = this.lookupBlueprint('route-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
