import styled from 'styled-components'

export const Wrap = styled.div`
  height: 100%;
`

export const MaxWidth = styled.div`
  max-width: 1800px;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.08);
  flex-grow: 1;
  z-index: 1;
  width: 100%;
`

export const AdminApp = styled.div`
  display: flex;
`

const duration = '500ms'
const opacityDuration = '350ms'
const easing = 'ease'

export const TransitionContainer = styled.div`
  position: absolute;
  width: 100vw;
  left: 0;
  top: 0;


  &.activityTransition-enter {
    opacity: 0;
    transform: translate3d(60px, 0, 0);
  }

  &.activityTransition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${opacityDuration} ${easing}, transform ${duration} ${easing};
  }

  &.activityTransition-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &.activityTransition-exit-active {
    opacity: 0;
    transform: translate3d(-60px, 0, 0);
    transition: opacity ${opacityDuration} ${easing}, transform ${duration} ${easing};
  }
`
