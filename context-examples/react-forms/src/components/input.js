'use strict'

import React from 'react'

const Input = ({ name, ...props }) => (
  <div>
    <input name={`MY_FORM_${name}`} {...props} />
  </div>
)

export default Input
