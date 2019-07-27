import React, { Component } from 'react'
import AriaModal from 'react-aria-modal'

import { getIn } from 'app/utilities'
import * as S from './styles'
import { X } from 'app/ui-kit/Icons'
import Modals from './ModalList'

export default class ModalController extends Component {
  state = {}

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

  render () {
    const { activeModal, modalProps } = this.props
    const { modalHasEntered } = this.state
    const modalName = getIn(activeModal, ['name'])

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
      titleText: 'my modal',
      focusModal: true, // TODO: fix auto focus
      onEnter: this.onModalEnter
    }

    const Modal = Modals[modalName]
    if (activeModal != null && Modal == null) {
      console.warn('No modal found for the name: ', activeModal)
      return null
    }

    return <S.OverlayWrap>
      <S.GlobalModalStyle />
      <AriaModal {...modalOptions} {...modalProps}>
        { activeModal &&
          <div className={modalClass}>
            <S.CloseX onClick={this.onModalExit}><X /></S.CloseX>
            <Modal closeModal={this.onModalExit} {...modalProps} setCloseFunc={this.setCloseFunc} />
          </div>
        }
      </AriaModal>
    </S.OverlayWrap>
  }
}
