import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

import IconUnlockedPadlock from '@app/assets/icons/padlock-unlocked.svg'
import IconLockedPadlock from '@app/assets/icons/padlock-locked.svg'

export const ItemServer: FunctionComponent<Props> = (props) => {
  const { className, selected, style, server, onClick } = props

  const {
    locked,
    name,
    host,
    port,
    hostname,
    players = 0,
    maxPlayers = 0,
    ping = '-',
    mode = '-',
    language = '-',
    map = '-'
  } = server

  const clickHandler = useCallback(() => {
    onClick(server)
  }, [server])

  const PadlockIcon = locked ? IconLockedPadlock : IconUnlockedPadlock

  const hostnameText = name || hostname || `(Retrieving info...) ${host}:${port}`
  const playersText = `${players} / ${maxPlayers}`

  return (
    <div
      className={cn(styles.container, { [styles.selected]: selected }, className)}
      style={style}
      onMouseUp={clickHandler}
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
