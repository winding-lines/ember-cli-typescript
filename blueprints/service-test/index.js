module.exports = {
  description: 'Generates a service unit test.',
  locals: function() {
    var blueprint = this.lookupBlueprint('service-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
