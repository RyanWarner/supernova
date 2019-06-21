import styled from 'styled-components'

import { Colors } from 'app/styles'

export const Wrap = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${Colors.white};
  background-color: ${Colors.black};
`
