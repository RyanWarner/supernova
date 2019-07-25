# Modals

This boilerplate uses [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) for its excellent UX and accessibility.

## Showing a modal

To show a modal from a component, dispatch the Redux action `openModal` with the name of the modal you wish to show.

```this.props.openModal({ modalName: 'LoginModal' })```

The `ModalController` component controls the showing and hiding of modals.

## Closing a modal

`ModalController` passes a `closeModal` function prop to all modals. Closing a modal from within a modal component is as simple as `this.props.closeModal()`

The action `closeAllModals` (found in `store/app/actions`) can aslo be used.

## Creating a new modal

1. Create your modal component
1. Add your modal to the list of modals in `components/modals/ModalList.js`
1. Open your modal `this.props.openModal({ modalName: 'MyModal' })`

## Passing a modal data

Sometimes you may want to give a modal some state or data without going through the Redux store.

When opening the modal, you can do so like this: 
```openModal({ modalName: 'MyModal', modalState: { data }})```

Then, within your modal, access this state `this.props.modalState`
