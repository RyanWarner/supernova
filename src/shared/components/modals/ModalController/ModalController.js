import React, { Component } from 'react'
import AriaModal from 'react-aria-modal'

import { getIn } from 'app/utilities'
import * as S from './styles'
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
    const { activeModal, dialogProps } = this.props
    const { modalHasEntered } = this.state
    const modalName = getIn(activeModal, ['name'])

    let modalClass = 'Aria-dialog'
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
      focusDialog: true, // TODO: fix auto focus for create post
      onEnter: this.onModalEnter
    }

    const Modal = Modals[modalName]
    if (activeModal != null && Modal == null) {
      console.warn('No dialog found for the name', activeModal)
      return null
    }

    return <S.OverlayWrap>
      <S.GlobalModalStyle />
      <AriaModal {...modalOptions} {...dialogProps}>
        { activeModal && <div onClick={this.onModalExit}>X</div> }
        { activeModal &&
          <div className={modalClass}>
            <Modal closeModal={this.onModalExit} {...dialogProps} setCloseFunc={this.setCloseFunc} />
          </div>
        }
      </AriaModal>
    </S.OverlayWrap>
  }
}
