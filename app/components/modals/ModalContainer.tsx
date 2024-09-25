import Modal from "react-native-modal"
import React, { ReactNode, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"

export interface ModalContainerProps {
  name: string
  children: ReactNode
  onModalHide?: () => void
  [x: string]: any
}

export const ModalContainer = observer(function ModalContainer({
  name,
  children,
  onModalHide = null,
  ...rest
}: ModalContainerProps) {
  const { currentModal, closeModal } = useStores()
  const handleCloseModal = useCallback(() => {
    if (onModalHide) onModalHide()
    closeModal(name)
  }, [closeModal, onModalHide])

  useEffect(() => {
    return () => closeModal(name)
  }, [name])

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
})
