import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { IconButton } from '../../icon-button'

import styles from './styles.scss'

import IconClose from '@app/assets/icons/cross.svg'

export const Header: FunctionComponent<Props> = (props) => {
  const { className, children, onClickClose } = props

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.caption}>{children}</div>
      <IconButton className={styles.button} icon={IconClose} onClick={onClickClose} />
    </div>
  )
}
