import Modal from "react-native-modal"
import React from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../../models"

function MyModal({ name, children, ...rest }) {
  const { currentModal, closeModal } = useStores()
  return (
    <Modal
      {...rest}
      isVisible={Boolean(
        currentModal && currentModal.name === name && currentModal.state === "open",
      )}
      onModalHide={closeModal}
    >
      {children}
    </Modal>
  )
}

export default observer(MyModal)
