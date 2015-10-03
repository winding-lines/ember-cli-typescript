module.exports = {
  description: 'Generates a route and a template, and registers the route with the router.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: ''
    },
    {
      name: 'skip-router',
      type: Boolean,
      default: false
    }
  ],

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('route')
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  shouldTouchRouter: function(name, options) {
    return this.lookupBlueprint('route').shouldTouchRouter(name, options);
  },
  
  shouldEntityTouchRouter: function(name, options) {
    return this.lookupBlueprint('route').shouldEntityTouchRouter(name, options);
  },

  afterInstall: function(options) {
    updateRouter.call(this, 'add', options);
  },

  afterUninstall: function(options) {
    updateRouter.call(this, 'remove', options);
  }
};