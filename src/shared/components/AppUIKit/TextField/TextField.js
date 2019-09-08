import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField((props) => {
  const { label } = props
  const error = props.fieldState.error

  return (
    <S.InputWrap>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput {...props} />
      <S.Error>{error}</S.Error>
    </S.InputWrap>
  )
})
