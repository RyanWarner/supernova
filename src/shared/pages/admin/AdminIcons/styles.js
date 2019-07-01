import styled from 'styled-components'

import { Admin, Colors } from 'app/styles'

export const AdminIconsPage = styled.div`
  ${Admin.page};
`

export const Title = styled.div`
  ${Admin.title};
`

export const ActivityCard = styled.div`
  align-items: flex-start;
`

export const IconCard = styled.div`
  margin-bottom: 50px;
  border-bottom: 1px solid ${Colors.adminNavBorder};
  width: 100%;
`

export const IconName = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
`
