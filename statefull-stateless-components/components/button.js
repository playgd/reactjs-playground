'use strict'

import React from 'react'

const buttonsStyle = {
  defaultButton: {
    background: '#000',
    color: '#fff',
    border: 0
  },

  okButton: () => ({
    ...buttonsStyle.defaultButton,
    background: '#fc0'
  }),

  cancelButton: () => ({
    ...buttonsStyle.defaultButton,
    background: '#f00'
  })
}

const Button = ({ type, text }) => (
  <button style={buttonsStyle[`${type}Button`]()}>{text}</button>
)

export default Button
