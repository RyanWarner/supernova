import styled from 'styled-components'

import { Colors } from 'app/styles'
import { Youtube } from 'app/ui-kit/Icons'

export const MadeByYawnchComponent = styled.a`
  display: flex;
  align-items: center;
  width: 200px;
  color: ${Colors.gray10};
  align-items: center;
`

export const StyledYoutube = styled(Youtube)`
  height: 17px;
  width: 17px;
  stroke: ${Colors.white060};

  margin-left: 10px;
`
