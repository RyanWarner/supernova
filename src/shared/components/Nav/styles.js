import styled from 'styled-components'
import { Colors, Shadows, Breakpoints } from 'app/styles'

export const Wrap = styled.div`
  height: 80px;
  background-color: ${Colors.black};
  box-shadow: ${Shadows.main};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    padding: 0 20px;
    height: 60px;
  }
`

export const NavItems = styled.div`
  display: flex;
`
export const NavItem = styled.a`
  margin-right: 30px;
  padding: 10px 16px 8px 16px;
  cursor: pointer;
  transition: all .2s ease-out;
  display: flex;
  align-items: center;
  color: ${Colors.white70};

  &:hover {
    color: ${Colors.pink};
  }

  @media(max-width: ${Breakpoints.main}) {
    margin-right: 10px;
  }

  &:last-child {
    margin: 0;
  }
`
export const SignUp = styled.div`
  margin-right: 30px;
  padding: 10px 16px 8px 16px;
  border: 1px solid ${Colors.black};
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s ease-out;

  &:hover {
    color: ${Colors.pink};
    border: 1px solid ${Colors.pink};
  }
`
export const CurrentUser = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  cursor: pointer;
`
export const Username = styled.div`

`

export const Avatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${Colors.mercury};
  margin-right: 8px;
`
