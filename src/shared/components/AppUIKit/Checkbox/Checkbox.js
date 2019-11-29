import React from 'react'
import { asField } from 'informed'
import PropTypes from 'prop-types'

import * as S from './styles'

const Checkbox = asField(({ fieldState, fieldApi, ...props }) => {
  const { value, error } = fieldState
  const { setValue, setTouched, setError } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, field, label, ...rest } = props

  return (
    <S.CheckboxComponent>
      <S.CheckboxAndLabel>
        <S.CheckboxWrap>
          <S.StyledCheckbox
            {...rest}
            ref={forwardedRef}
            type='checkbox'
            id={field}
            field={field}
            value={value || defaultValue}
            onChange={e => {
              setValue(e.target.checked)
              if (fieldState.touched) setError(null)
              if (onChange) { onChange(e.target.checked) }
            }}
            onBlur={e => {
              setTouched(true)
              if (onBlur) { onBlur(e) }
            }}
          />
          <S.StyledCheck />
        </S.CheckboxWrap>
        {label && <S.Label htmlFor={field}>{label}</S.Label>}
      </S.CheckboxAndLabel>
      <S.ErrorLabel>{error}</S.ErrorLabel>
    </S.CheckboxComponent>
  )
})

const CheckboxWrap = props => <Checkbox {...props} />

CheckboxWrap.propTypes = {
  /** The name of the checkbox */
  label: PropTypes.string,

  /** onChange event */
  onChange: PropTypes.func
}

CheckboxWrap.defaultProps = {
  label: undefined,
  onChange: undefined
}

export default CheckboxWrap
