import React from 'react'
import PropTypes from 'prop-types'
import { asField } from 'informed'

import * as S from './styles'

const TextField = asField(props => {
  const { label, disableError, ...rest } = props
  const error = props.fieldState.error

  return (
    <S.TextFieldComponent>
      {label && <S.Label htmlFor={props.field}>{label}</S.Label>}
      <S.TextInput {...rest} />
      {!disableError && <S.Error>{error}</S.Error>}
    </S.TextFieldComponent>
  )
})

const TextFieldWrap = props => <TextField {...props} />

TextFieldWrap.propTypes = {
  /** The name of the text input */
  label: PropTypes.string,

  /** When true, the error message is never shown in the UI */
  disableError: PropTypes.bool
}

TextFieldWrap.defaultProps = {
  label: undefined,
  disableError: false
}

export default TextFieldWrap
