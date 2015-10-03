module.exports = {
  description: 'Generates a view unit test.',
  locals: function() {
    var blueprint = this.lookupBlueprint('view-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
