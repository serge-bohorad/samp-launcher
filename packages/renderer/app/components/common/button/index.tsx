import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const Button: FunctionComponent<Props> = (props) => {
  const { className, disabled, children, onClick } = props

  return (
    <button className={cn(styles.button, className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
