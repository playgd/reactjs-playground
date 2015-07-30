;(function(window, document, React, Module, undefined) {
  'use strict';
  var TodoApp = React.createClass({
    getInitialState: function() {
      return { items: [], text: '' };
    },
    handleChange: function(e) {
      this.setState({ text: e.target.value });
    },
    handleSubmit: function(e) {
      e.preventDefault();
      var nextItems = this.state.items.concat([ this.state.text ]);
      var nextText = '';
      this.setState({ items: nextItems, text: nextText });
    },
    render: function() {
      return (
        <div>
          <h3>TODO</h3>
          <Module.TodoList items={this.state.items} />

          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button>{'Add #' + (this.state.items.length + 1)}</button>
          </form>
        </div>
      );
    }
  });

  window.Module = Module || {};
  window.Module.TodoApp = TodoApp;
})(window, document, window.React, window.Module);
