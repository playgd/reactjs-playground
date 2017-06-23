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
    const { name, fields } = this.props.form
    return (
      <form onSubmit={this.handleSubmit} name={name}>
        <Input name={fields['input-name']} />
        <Input name={fields['input-email']} type='email' />
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
