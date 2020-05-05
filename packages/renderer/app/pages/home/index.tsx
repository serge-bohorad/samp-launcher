import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Dashboard } from './dashboard'
import { Serverboard } from './serverboard'
import { Footer } from './footer'

import styles from './styles.scss'

export const PageHome: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <Dashboard />
      <Serverboard className={styles.serverboard} />
      <Footer />
    </div>
  )
}
