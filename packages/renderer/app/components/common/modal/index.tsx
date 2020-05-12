import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useKeyPressEffect } from '@app/hooks/common'

import { Portal } from '../portal'

import styles from './styles.scss'

export const Modal: FunctionComponent<Props> = (props) => {
  const { className, closable = true, children, onClose } = props

  const closeHandler = useCallback(() => {
    if (!closable) {
      return
    }

    onClose()
  }, [closable, onClose])

  useKeyPressEffect(['Escape'], closeHandler, [closeHandler])

  return (
    <Portal>
      <div className={cn(styles.container, className)} onMouseDown={closeHandler}>
        {children}
      </div>
    </Portal>
  )
}
