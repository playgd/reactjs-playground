;(function(window, document, React, Module, undefined) {
  'use strict';
  var $main = document.querySelector( '[data-js="main"]' );
  var STOP_LOADING = true;
  React.render(<Module.TodoApp />, $main);

  window.Module = Module || {};
})(window, document, window.React, window.Module);
