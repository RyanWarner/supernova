import styled from 'styled-components'

import { Colors, Type } from 'app/styles'
import { Check } from 'app/ui-kit/Icons'

export const CheckboxComponent = styled.div``
export const CheckboxWrap = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: ${Colors.beige20};
  border: 1px solid ${Colors.gray10};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid ${Colors.brand30};
  }
`

export const CheckboxAndLabel = styled.div`
  display: flex;
  align-items: center;
`

export const StyledCheck = styled(Check)`
  opacity: 0;
  transition: opacity 175ms ease;

  g {
    fill: ${Colors.brand10};
  }
`

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;

  &:checked ~ ${StyledCheck} {
    opacity: 1;
  }
`

export const Label = styled.label`
  margin-left: 10px;
`

export const ErrorLabel = styled.div`
  ${Type.smallBody}
  color: ${Colors.error};
  position: relative;
  height: 20px;
  margin: 3px 0 0 3px;
`
