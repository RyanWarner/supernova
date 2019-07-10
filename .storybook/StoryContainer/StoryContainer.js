import React from 'react'

import * as S from './styles'
import { Global, Fonts, Type, Storybook } from 'app/styles'

export default function StoryContainer (storyFn) {
  return <S.StoryContainerComponent>
    <Global.GlobalStyle />
    <Fonts.GlobalStyle />
    <Type.GlobalStyle />
    <S.GlobalStyle />
    { storyFn() }
  </S.StoryContainerComponent>
}
