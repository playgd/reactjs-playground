;(function(window, document, React, Module, undefined) {
  'use strict';
  var $main = document.querySelector( '[data-js="main"]' );
  React.render(<Module.TodoApp />, $main);
})(window, document, window.React, window.Module);
