import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closeAllModals } from '../../../store/app/actions'
import ModalController from './ModalController'

const mapStateToProps = (state) => {
  const { activeModal, dialogProps } = state.app
  return { activeModal, dialogProps }
}
const dispatchProps = { closeAllModals }

@withRouter
@connect(mapStateToProps, dispatchProps)
export default class ConnectedModalController extends ModalController {
  static propTypes = {
    // connect
    activeModal: PropTypes.object,

    // dispatch
    closeAllModals: PropTypes.func.isRequired
  }
}
