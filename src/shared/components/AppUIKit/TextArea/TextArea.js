import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField(({ fieldState, fieldApi, ...props }) => {
  const { value, error } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, label, ...rest } = props

  return (
    <S.TextAreaComponent>
      {label &&
        <S.Label htmlFor={props.field}>{label}</S.Label>}
      <S.TextArea
        fieldState={fieldState}
        ref={forwardedRef}
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
      <S.Error>{error}</S.Error>
    </S.TextAreaComponent>
  )
})
