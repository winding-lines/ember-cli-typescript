var tsTranspiler = require('broccoli-typescript-compiler');

function TypeScriptPreprocessor() {
  this.name = 'ember-cli-typescript';
  this.ext = 'ts';
}

TypeScriptPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  return tsTranspiler(tree);
};

module.exports = TypeScriptPreprocessor;
