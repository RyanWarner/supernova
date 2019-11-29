import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Breakpoints, Colors, Mixins, Type } from 'app/styles'
import Nova from '../Nova/Nova'

export const HeroComponent = styled.div`
  display: flex;
  align-items: center;
  ${Mixins.widthContainer};
  height: 620px;

  @media(max-width: ${Breakpoints.main}) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Text = styled.div`
  margin-right: auto;
  z-index: 2;

  @media(max-width: ${Breakpoints.main}) {
    margin: -100px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h1`
  margin-bottom: 13px;
  width: 510px;

  @media(max-width: ${Breakpoints.main}) {
    width: auto;
    text-align: center;
  }
`

export const Description = styled.p`
  ${Type.body30};
  width: 510px;
  color: ${Colors.gray20};
  margin-bottom: 50px;

  @media(max-width: ${Breakpoints.main}) {
    width: auto;
    max-width: 500px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const StyledButton = styled(Button)``

export const StyledNova = styled(Nova)``
