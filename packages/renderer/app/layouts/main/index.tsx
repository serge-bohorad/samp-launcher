import React, { FunctionComponent, useCallback, useEffect } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { onFetchGroups } from '@app/services/group'

import { PageHome } from '@app/pages/home'
import { Titlebar } from './titlebar'

import styles from './styles.scss'

export const LayoutMain: FunctionComponent<Props> = (props) => {
  const { className } = props

  const init = useCallback(async () => {
    await onFetchGroups()
  }, [])

  useEffect(() => {
    init()
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <Titlebar />
      <PageHome className={styles.page} />
    </div>
  )
}
