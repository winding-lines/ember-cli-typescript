var coffee = require('broccoli-coffee');
var fs = require('fs');

function CoffeePreprocessor(options) {
  this.name = 'ember-cli-coffeescript';
  this.options = options || {};
}

CoffeePreprocessor.prototype.ext = coffee.prototype.extensions;

CoffeePreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  var options = {
    bare: true,
    srcDir: inputPath,
    destDir: outputPath
  };
  return coffee(tree, options);
};

module.exports = CoffeePreprocessor;
