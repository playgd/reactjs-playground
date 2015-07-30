;(function(window, document, React, Module, undefined) {
  'use strict';

  var TodoList = React.createClass({
    render: function() {
      var createItems = function(itemText, index) {
        return <li key="{index + itemText}">{itemText}</li>;
      };
      return <ul>{this.props.items.map(createItems)}</ul>;
    }
  });

  window.Module = Module || {};
  window.Module.TodoList = TodoList;
})(window, document, window.React, window.Module);
