import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Spinner } from '../spinner'

import styles from './styles.scss'

export const LoadingBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <Spinner />
    </div>
  )
}
