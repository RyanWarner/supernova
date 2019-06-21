import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UserNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 10px;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  padding: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const Button = styled.div`

`
