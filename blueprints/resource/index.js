module.exports = {
  description: 'Generates a model and route.',

  install: function(options) {
    return this._process('install', options);
  },

  uninstall: function(options) {
    return this._process('uninstall', options);
  },

  _processBlueprint: function(type, name, options) {
    var blueprint = this.lookupBlueprint('resource');
    return blueprint._processBlueprint.apply(blueprint, arguments);
  },

  _process: function(type, options) {
    var blueprint = this.lookupBlueprint('resource');
    return blueprint._process.apply(blueprint, arguments);
  }
};
