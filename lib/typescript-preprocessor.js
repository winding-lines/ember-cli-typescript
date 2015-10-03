var tsTranspiler = require('broccoli-typescript-compiler');

function TypeScriptPreprocessor(options) {
  this.name = 'ember-cli-typescript';
  this.ext = 'ts';
  this.options = options;
}

TypeScriptPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  return tsTranspiler(tree, this.options);
};

module.exports = TypeScriptPreprocessor;
