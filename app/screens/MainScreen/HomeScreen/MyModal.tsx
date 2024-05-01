import Modal from "react-native-modal"
import React, { ReactNode, useCallback } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../../models"

export interface MyModalProps {
  name: string
  children: ReactNode
  onModalHide?: () => void
  [x: string]: any
}

function MyModal({ name, children, onModalHide = null, ...rest }: MyModalProps) {
  const { currentModal, closeModal } = useStores()
  const handleCloseModal = useCallback(() => {
    if (onModalHide) onModalHide()
    closeModal()
  }, [closeModal, onModalHide])
  return (
    <Modal
      {...rest}
      isVisible={Boolean(
        currentModal && currentModal.name === name && currentModal.state === "open",
      )}
      onModalHide={handleCloseModal}
    >
      {children}
    </Modal>
  )
}

export default observer(MyModal)
