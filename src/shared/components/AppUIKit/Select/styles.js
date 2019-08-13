import React from 'react'
import styled from 'styled-components'
import Select, { components } from 'react-select'

import { Colors, Type } from 'app/styles'
import { ChevronDown } from 'app/ui-kit/Icons'

export const StyledSelect = styled(Select)`
  .ReactSelect__control {
    font-family: ${Type.fontFace};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(0,0%,80%);
    box-sizing: border-box;
    min-height: 40px;
    border-radius: 4px;
    background-color: ${Colors.darkGray};
    border: 1px solid ${Colors.borderGray};
    border-radius: 4px;
    font-weight: ${Type.fontWeights.medium};

    &.ReactSelect__control--is-focused {
      border-color: ${Colors.brand};
      box-shadow: 0 0 0 1px ${Colors.brand};
    }
  }

  .ReactSelect__value-container {
    margin-top: 2px;
    padding: 1px 8px;
    ${Type.body};
  }

  .ReactSelect__indicator {
    color: ${Colors.brand};
    padding: 4px 5px;
  }

  .ReactSelect__dropdown-indicator {
    color: ${Colors.brand};
  }

  .ReactSelect__option--is-focused {
    background-color: ${Colors.brandTranslucent};

    &:active {
      background-color: ${Colors.brand};
      color: ${Colors.white};
    }
  }

  .ReactSelect__option--is-selected {
    background-color: ${Colors.brand};
    color: ${Colors.white};
  }

  .ReactSelect__option {
    font-weight: ${Type.fontWeights.medium};
    cursor: pointer;
    transition: all 175ms ease-out;
  }
`

export const StyledChevronDown = styled(ChevronDown)`
  width: 10px;
  height: 10px;
  margin: 0 8px;
`

export const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <StyledChevronDown />
    </components.DropdownIndicator>
  )
}

export const SelectComponent = styled.div``
export const Label = styled.div`
  font-size: 14px;
`
