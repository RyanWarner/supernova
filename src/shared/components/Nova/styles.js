import styled from 'styled-components'

import { Animations, Breakpoints } from 'app/styles'

const sizes = {
  large: {
    space: '633px',
    nova: '340px',
    globe: '285px'
  },
  small: {
    space: '528px',
    nova: '264px',
    globe: '218px'
  }
}

export const NovaComponent = styled.div`
  width: ${sizes.large.space};
  height: ${sizes.large.space};
  position: relative;
  margin-left: 30px;
  margin-top: 30px;

  @media(max-width: ${Breakpoints.main}) {
    width: ${sizes.small.space};
    height: ${sizes.small.space};
    margin-top: -170px;
    margin-left: -245px;
  }
`

export const StyledSpace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${sizes.large.space};
  height: ${sizes.large.space};

  @media(max-width: ${Breakpoints.main}) {
    width: ${sizes.small.space};
    height: ${sizes.small.space};
  }
`

export const Nova = styled.div`
  width: 340px;
  height: 340px;
  position: absolute;
  left: 260px;
  top: 150px;

  @media(max-width: ${Breakpoints.main}) {
    width: ${sizes.small.nova};
    height: ${sizes.small.nova};
    left: 245px;
    top: 145px;
  }
`

export const StyledGlobe = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -142px 0 0 -142px;
  width: 285px;
  height: 285px;

  @media(max-width: ${Breakpoints.main}) {
    width: ${sizes.small.globe};
    height: ${sizes.small.globe};
    margin: calc(${sizes.small.globe} / -2) 0 0 calc(${sizes.small.globe} / -2);
  }
`

export const StyledRings = styled.img`
  animation: 140s linear ${Animations.spin} infinite;
  position: absolute;
  width: 340px;
  height: 340px;
  top: 0;
  left: 0;

  @media(max-width: ${Breakpoints.main}) {
    width: ${sizes.small.nova};
    height: ${sizes.small.nova};
  }
`
