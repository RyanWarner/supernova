export const ActionTypes = {
  SET_ACTIVE_MODAL: 'SET_ACTIVE_MODAL'
}

export const closeAllModals = () => ({ type: ActionTypes.SET_ACTIVE_MODAL, modal: null })
export const openModal = ({ modalName, modalState }) => ({
  type: ActionTypes.SET_ACTIVE_MODAL,
  modal: { name: modalName, modalState }
})
