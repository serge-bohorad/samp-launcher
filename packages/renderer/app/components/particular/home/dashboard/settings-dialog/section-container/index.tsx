import React, { FunctionComponent } from 'react'

import { Props } from './types'

import styles from './styles.scss'

export const SectionContainer: FunctionComponent<Props> = (props) => {
  const { className, caption, children } = props

  return (
    <div className={className}>
      <div className={styles.caption}>{caption}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
