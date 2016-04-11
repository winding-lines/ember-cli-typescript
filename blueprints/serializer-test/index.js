module.exports = {
  description: 'Generates a serializer unit test.',
  
  locals: function() {
    var blueprint = this.lookupBlueprint('serializer-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
