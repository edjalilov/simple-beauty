import type { ModalProps } from '@mantine/core'
import { Modal } from '@mantine/core'
import type { ReactNode } from 'react'

interface IBaseModalProps extends Omit<ModalProps, 'children'> {
  children: ReactNode
}

export const BaseModal = ({ children, ...props }: IBaseModalProps) => {
  return (
    <Modal
      centered
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      size="sm"
      padding={0}
      styles={{
        content: {
          padding: 0,
        },
      }}
      {...props}
    >
      {children}
    </Modal>
  )
}
