'use strict'

import React from 'react'
import Button from '../components/button'

const App = () => (
  <div>
    <h1>App worked!</h1>
    <Button type='ok' onClick={() => console.log('ok')}>
      OK
    </Button>

    <Button type='cancel' onClick={() => console.log('cancel')}>
      Cancel
    </Button>
  </div>
)

export default App
