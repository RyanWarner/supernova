import styled from 'styled-components'

import { Colors, Breakpoints } from 'app/styles'

export const SignUpModalComponent = styled.div`
  padding: 50px 96px;
  width: 520px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.beige20};

  @media(max-width: ${Breakpoints.main}) {
    width: 100vw;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  text-align: center;
  color: ${Colors.gray10};
  margin-top: 0;
  margin-bottom: 10px;
`

export const Description = styled.p`
  text-align: center;
  color: ${Colors.gray20};
  margin-bottom: 30px;
`
