import styled from 'styled-components'

import { Breakpoints, Colors, Mixins, Type } from 'app/styles'
import Nova from '../Nova/Nova'

export const StyledNova = styled(Nova)`
  width: 100%;

  @media(min-width: ${Breakpoints.tablet}) {
    width: 50%;
  }
`

export const HeroComponent = styled.div`
  display: flex;
  align-items: center;
  ${Mixins.widthContainer};
  width: 100%;
  max-width: 1280px;

  @media(max-width: ${Breakpoints.tablet}) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  margin-right: 80px;
  color: ${Colors.white090};

  @media(min-width: ${Breakpoints.tablet}) {
    margin: 0;
    width: 50%;
    max-width: 690px;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  white-space: nowrap;
  margin-bottom: 13px;
  margin-top: 0;

  @media(max-width: ${Breakpoints.tablet}) {
    width: auto;
    text-align: center;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  ${Type.body30};
  margin-bottom: 30px;
  color: ${Colors.white080};

  a {
    margin-top: 8px;
  }

  @media(max-width: ${Breakpoints.tablet}) {
    width: auto;
    max-width: 500px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 15px;

  svg {
    fill: transparent;
    stroke: ${Colors.white090};
    margin-right: 10px;
    transition: stroke 175ms ease;
  }

  &:hover {
    color: ${Colors.brand50};

    svg {
      stroke: ${Colors.brand40};
    }
  }
`
