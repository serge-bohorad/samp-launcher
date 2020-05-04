import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Logo } from './logo'
import { ControlBox } from './control-box'

import styles from './styles.scss'

export const Titlebar: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.movableRegion}>
        <Logo className={styles.logo} />
      </div>
      <ControlBox />
    </div>
  )
}
