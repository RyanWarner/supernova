import React, { Component } from 'react'
import AriaModal from 'react-aria-modal'

import * as S from './styles'
import Modals from './ModalList'

export default class ModalController extends Component {
  state = {}

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.onModalExit()
    }
  }

  closeModal = () => {
    if (this.onRequestClose) this.onRequestClose()
    this.props.closeAllModals()
  }

  setCloseFunc = (closeFunc) => {
    this.onRequestClose = closeFunc
  }

  onModalExit = (event) => {
    if (event) event.stopPropagation()
    this.setState({
      modalHasEntered: false
    }, () => {
      setTimeout(() => {
        this.closeModal()
      }, 300)
    })
  }

  onModalEnter = () => {
    this.setState({ modalHasEntered: true })
  }

  openModal = (name) => {
    this.props.openModal({ name })
  }

  render () {
    const { activeModal } = this.props
    const { modalHasEntered } = this.state
    const modalName = activeModal?.name
    const modalState = activeModal?.modalState
    const animation = activeModal?.animation

    let modalClass = 'Aria-modal'
    let underlayClass = 'Aria-underlay'
    if (modalHasEntered) {
      modalClass += ' has-entered'
      underlayClass += ' has-entered'
    }

    const modalOptions = {
      mounted: activeModal != null,
      onExit: this.onModalExit,
      closeTimeoutMS: 250,
      underlayClass,
      titleText: modalName,
      focusModal: true,
      onEnter: this.onModalEnter,
      underlayStyle: animation === 'sideNav' ? S.sideNavUnderlayStyle : null
    }

    const Modal = Modals[modalName]
    if (activeModal != null && Modal == null) {
      console.warn('No modal found for the name', activeModal)
      return null
    }

    return (
      <S.OverlayWrap>
        <S.GlobalModalStyle animation={animation} />
        <AriaModal {...modalOptions} {...modalState}>
          {activeModal &&
            <div className={modalClass}>
              {/* eslint-disable-next-line react/jsx-handler-names */}
              <S.CloseX onClick={this.onModalExit} />
              <Modal
                closeModal={this.onModalExit}
                openModal={this.openModal}
                setCloseFunc={this.setCloseFunc}
                {...modalState}
              />
            </div>}
        </AriaModal>
      </S.OverlayWrap>
    )
  }
}
