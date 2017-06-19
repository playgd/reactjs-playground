'use strict'

import React, { PureComponent } from 'react'
import { withForm } from 'components/form'
import Input from 'components/input'

class App extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.handleSubmit())
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input name='input-name' />
        <Input name='input-email' type='email' />
        <button>Enviar</button>
      </form>
    )
  }
}

export default withForm({
  name: 'my-form',
  fields: {
    'input-name': '',
    'input-email': {
      type: 'email',
      placeholder: 'Preencha o e-mail'
    }
  }
})(App)
