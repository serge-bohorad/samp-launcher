import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { PageHome } from '@app/pages/home'
import { Titlebar } from './titlebar'

import styles from './styles.scss'

export const LayoutMain: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <Titlebar />
      <PageHome className={styles.page} />
    </div>
  )
}
