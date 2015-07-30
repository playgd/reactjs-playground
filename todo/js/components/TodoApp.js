;(function(window, document, React, Module, undefined) {
  'use strict';

  var TodoApp = React.createClass({
    getInitialState: function() {
      return { items: [], text: '' };
    },
    render: function() {
      return (
        <div>
          <h3>TODO</h3>
          <Module.TodoList items={this.state.items} />

          <form>
            <input />
            <button>{'Add #1'}</button>
          </form>
        </div>
      );
    }
  });

  window.Module = Module || {};
  window.Module.TodoApp = TodoApp;
})(window, document, window.React, window.Module);
