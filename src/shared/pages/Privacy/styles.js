import styled from 'styled-components'

import { Colors } from 'app/styles'

export const PrivacyPage = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.black};
  color: ${Colors.white};
`

export const MaxWidth = styled.div`
  max-width: 800px;
`
