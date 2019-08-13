import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, ...rest } = props

  return <S.SelectComponent>
    <S.Label>{props.label}</S.Label>
    <S.StyledSelect
      {...rest}
      components={{ DropdownIndicator: S.DropdownIndicator }}
      classNamePrefix='ReactSelect'
      value={value || defaultValue}
      onChange={selectedOption => {
        setValue(selectedOption)
        if (onChange) { onChange(selectedOption) }
      }}
      onBlur={e => {
        setTouched(true)
        if (onBlur) { onBlur(e) }
      }}
    />
  </S.SelectComponent>
})
