import styled from 'styled-components'

import { Admin, Colors } from 'app/styles'

export const AdminColorsPage = styled.div`
  ${Admin.page};
`

export const ActivityCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.div`
  ${Admin.title};
`

export const ColorCard = styled.div`
  padding: 20px;
`
export const ColorTile = styled.div`
  background-color: ${props => props.color};
  width: 140px;
  height: 100px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.07);
`
export const ColorDetails = styled.div`

`
export const ColorName = styled.div`
  font-size: 12px;
  margin-top: 4px;
  line-height: 150%;
`
export const ColorValue = styled.div`
  font-size: 12px;
  color: ${Colors.fontLight};
  line-height: 150%;
`
