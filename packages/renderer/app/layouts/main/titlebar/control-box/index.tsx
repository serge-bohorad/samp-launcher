import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { minimizeWindow, closeWindow } from '@app/services/misc'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import MinimizeIcon from '@app/assets/icons/minus.svg'
import CloseIcon from '@app/assets/icons/cross.svg'

export const ControlBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickMinimize = useCallback(() => {
    minimizeWindow()
  }, [])

  const onClickClose = useCallback(() => {
    closeWindow()
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton className={styles.button} icon={MinimizeIcon} onClick={onClickMinimize} />
      <IconButton
        className={cn(styles.button, styles.buttonClose)}
        icon={CloseIcon}
        onClick={onClickClose}
      />
    </div>
  )
}
