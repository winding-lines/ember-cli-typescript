var TS = require('broccoli-typescript-compiler');

function TypeScriptPreprocessor(options) {
  this.name = 'ember-cli-typescript-compiler';
  this.ext = 'ts';
  this.options = options;
}

TypeScriptPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  return new TS(tree, this.options);
};

module.exports = TypeScriptPreprocessor;
