import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const PageHome: FunctionComponent<Props> = (props) => {
  const { className } = props

  return <div className={cn(styles.container, className)}></div>
}
