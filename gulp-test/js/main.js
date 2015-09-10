'use strict';

import React from 'react';
import Hello from './component.js';
console.log('main');
React.render(<Hello />, document.querySelector('[data-js="main"]'));
