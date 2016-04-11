module.exports = {
  description: 'Generates a transform unit test.',
  locals: function() {
    var blueprint = this.lookupBlueprint('transform-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
