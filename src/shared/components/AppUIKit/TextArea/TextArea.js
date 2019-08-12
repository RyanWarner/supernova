import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, ...rest } = props

  return <S.TextAreaComponent>
    <S.Label>{props.label}</S.Label>
    <S.TextArea
      {...rest}
      value={value}
      onChange={e => {
        setValue(e.target.value)
        if (onChange) { onChange(e.target.value) }
      }}
      onBlur={e => {
        setTouched(true)
        if (onBlur) { onBlur(e) }
      }}
    />
  </S.TextAreaComponent>
})
