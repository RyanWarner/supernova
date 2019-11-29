import React from 'react'
import styled from 'styled-components'
import Select, { components } from 'react-select'

import { Colors, Inputs, Type } from 'app/styles'
import { ChevronDown } from 'react-feather'

export const StyledSelect = styled(Select)`
  min-width: 100px;
  width: 100%;

  .ReactSelect__control {
    font-family: ${Type.fontFace};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(0,0%,80%);
    box-sizing: border-box;
    min-height: 40px;
    border-radius: 4px;
    background-color: ${Colors.beige20};
    border: 1px solid ${Colors.gray20};
    border-radius: 4px;
    font-weight: ${Type.fontWeights.medium};

    &.ReactSelect__control--is-focused {
      border-color: ${Colors.brand20};
      box-shadow: 0 0 0 1px ${Colors.brand30};
    }
  }

  .ReactSelect__menu {
    background-color: ${Colors.beige20};
  }

  .ReactSelect__value-container {
    margin-top: 2px;
    padding: 1px 8px;
    ${Type.body};
    color: ${Colors.beige20};
  }

  .ReactSelect__single-value {
    color: ${Colors.gray10};
  }

  .ReactSelect__indicator {
    color: ${Colors.brand30};
    padding: 4px 5px;
  }

  .ReactSelect__dropdown-indicator {
    color: ${Colors.gray10};
  }

  .ReactSelect__option--is-focused {
    background-color: ${Colors.brand40};

    &:active {
      background-color: ${Colors.brand50};
      color: ${Colors.white};
    }
  }

  .ReactSelect__option--is-selected {
    background-color: ${Colors.brand30};
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

export const Label = styled.label`
  ${Inputs.label};
`
