import React from 'react'
import styled from 'styled-components'
import Select, { components } from 'react-select'

import { Colors } from 'app/styles'
import { ChevronDown } from 'app/ui-kit/Icons'

export const StyledSelect = styled(Select)`
  .ReactSelect__control {
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(0,0%,80%);
    box-sizing: border-box;
    height: 30px;
    min-height: 20px;
    border-radius: 4px;

    &.ReactSelect__control--is-focused {
      border-color: ${Colors.purple};
      box-shadow: 0 0 0 1px ${Colors.purple};
    }
  }

  .ReactSelect__value-container {
    margin-top: 2px;
    padding: 1px 8px;
  }

  .ReactSelect__indicator {
    color: ${Colors.mercury};
    padding: 4px 5px;
  }

  .ReactSelect__dropdown-indicator {
    color: ${Colors.mercury};
  }
`

export const StyledChevronDown = styled(ChevronDown)`
  width: 18px;
  height: 18px;
  opacity: 0.4;
`

export const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <StyledChevronDown />
    </components.DropdownIndicator>
  )
}
