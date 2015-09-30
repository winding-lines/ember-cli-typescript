var tsTranspiler = require('broccoli-typescript-compiler');

function TypeScriptPreprocessor() {
  this.name = 'ember-cli-typescript';
}

// TODO: Do I need
//TypeScriptPreprocessor.prototype.ext = ["ts"];
//TypeScriptPreprocessor.prototype.targetExtension = 'js';

TypeScriptPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  var options = {
    target: 'es6'
  };
  return tsTranspiler(tree, options);
};

module.exports = TypeScriptPreprocessor;
