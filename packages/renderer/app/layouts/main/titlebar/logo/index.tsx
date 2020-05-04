import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

import SampIcon from '@app/assets/icons/samp.svg'

export const Logo: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <SampIcon className={styles.icon} />
      <div className={styles.text}>GTA San Andreas Multiplayer</div>
    </div>
  )
}
