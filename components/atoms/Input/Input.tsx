import React from 'react'
import { styled, TextField, TextFieldProps } from '@mui/material'
import variables from '@styles/variables.module.scss'

const InputComponent = styled(TextField)({
})

const Input = (props: TextFieldProps) => (
  <InputComponent
    {...props}
  />
)

export default Input