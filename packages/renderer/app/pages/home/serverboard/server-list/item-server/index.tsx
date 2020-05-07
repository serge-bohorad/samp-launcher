import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import styles from './styles.scss'

import IconUnlockedPadlock from '@app/assets/icons/padlock-unlocked.svg'
import IconLockedPadlock from '@app/assets/icons/padlock-locked.svg'

const ItemServerComponent: FunctionComponent<Props> = (props) => {
  const { className, style, server } = props

  const { setSelectedServer, isSelectedServer } = useSelector(({ server }) => server)

  const {
    locked,
    name,
    host,
    port,
    hostname,
    players = 0,
    maxPlayers = 0,
    ping = 0,
    mode = '-',
    language = '-',
    map = '-'
  } = server

  const onClickSelectServer = useCallback(() => {
    setSelectedServer(server)
  }, [server])

  const PadlockIcon = locked ? IconLockedPadlock : IconUnlockedPadlock

  const hostnameText = name || hostname || `(Retrieving info...) ${host}:${port}`
  const playersText = `${players} / ${maxPlayers}`

  return (
    <div
      className={cn(styles.container, { [styles.selected]: isSelectedServer(server) }, className)}
      style={style}
      onMouseUp={onClickSelectServer}
    >
      <PadlockIcon className={cn(styles.padlock, { [styles.lockedPadlock]: locked })} />
      <div className={cn(styles.column, styles.hostname)} title={hostnameText}>
        {hostnameText}
      </div>
      <div className={cn(styles.column, styles.players)}>{playersText}</div>
      <div className={cn(styles.column, styles.ping)}>{ping}</div>
      <div className={cn(styles.column, styles.mode)}>{mode}</div>
      <div className={cn(styles.column, styles.language)}>{language}</div>
      <div className={cn(styles.column, styles.map)}>{map}</div>
    </div>
  )
}

export const ItemServer = observer(ItemServerComponent)
