import Hello from './component';
import React from 'react';

main();

function main() {
  return React.render(<Hello />, document.querySelector('[data-js="main"]'));
}
