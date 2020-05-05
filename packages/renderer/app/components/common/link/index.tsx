import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const Link: FunctionComponent<Props> = (props) => {
  const { className, text, onClick } = props

  return (
    <span className={cn(styles.link, className)} onClick={onClick}>
      {text}
    </span>
  )
}
