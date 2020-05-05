import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const SectionCaption: FunctionComponent<Props> = (props) => {
  const { className, text } = props

  return <div className={cn(styles.container, className)}>{text}</div>
}
