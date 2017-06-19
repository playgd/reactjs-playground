'use strict'

import React, { PureComponent } from 'react'

const withForm = (options) => (Wrapper) => {
  class Form extends PureComponent {
    constructor () {
      super()

      this.store = {
        name: options.name,
        fields: options.fields
      }
    }

    getChildContextTypes () {
      return {
        FORM_store: this.store
      }
    }

    render () {
      return (
        <Wrapper
          {...this.props}
          handleSubmit={() => console.log('handle submit form')}
        />
      )
    }
  }

  return Form
}

export { withForm }
