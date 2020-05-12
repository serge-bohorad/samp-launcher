import React, { FunctionComponent, MouseEvent, useCallback, useEffect } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { onFetchSettings } from '@app/services/settings'
import { onFetchGroups } from '@app/services/group'

import { Titlebar } from './titlebar'
import { PageHome } from '@app/pages/home'
import { NotificationBox } from './notification-box'

import styles from './styles.scss'

export const LayoutMain: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onMouseMove = useCallback((event: MouseEvent) => {
    window.cursorPosX = event.clientX
    window.cursorPosY = event.clientY
  }, [])

  const init = useCallback(async () => {
    await onFetchSettings()
    await onFetchGroups()
  }, [])

  useEffect(() => {
    init()
  }, [])

  return (
    <div className={cn(styles.container, className)} onMouseMove={onMouseMove}>
      <Titlebar />
      <PageHome className={styles.page} />
      <NotificationBox />
    </div>
  )
}
