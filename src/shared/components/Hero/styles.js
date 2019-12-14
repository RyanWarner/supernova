import styled from 'styled-components'

import { Breakpoints, Colors, Mixins, Sizes } from 'app/styles'
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
  margin-bottom: 0;
  text-align: left;

  @media (min-width: ${Breakpoints.tablet}) {
    margin-bottom: ${Sizes.paddingSmall};
  }
`

export const Description = styled.h4`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 0;
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
