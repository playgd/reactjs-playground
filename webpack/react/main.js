import React from 'react';
import Hello from './component.jsx';

main();

function main() {
  return React.render(<Hello />, document.querySelector('[data-js="main"]'));
}
