import React, { FunctionComponent, useState, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { ButtonSort } from './button-sort'

import styles from './styles.scss'

export const SortingBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { sortServersByHostname, sortServersByField } = useSelector(({ server }) => server)

  const [direction, setDirection] = useState(true)

  const onClickSortByHostname = useCallback(() => {
    sortServersByHostname(direction)
    setDirection(!direction)
  }, [direction])

  const onClickSortByPlayers = useCallback(() => {
    sortServersByField('players', direction)
    setDirection(!direction)
  }, [direction])

  const onClickSortByPing = useCallback(() => {
    sortServersByField('ping', direction)
    setDirection(!direction)
  }, [direction])

  const onClickSortByMode = useCallback(() => {
    sortServersByField('mode', direction)
    setDirection(!direction)
  }, [direction])

  const onClickSortByLanguage = useCallback(() => {
    sortServersByField('language', direction)
    setDirection(!direction)
  }, [direction])

  const onClickSortByMap = useCallback(() => {
    sortServersByField('mapname', direction)
    setDirection(!direction)
  }, [direction])

  return (
    <div className={cn(styles.container, className)}>
      <ButtonSort
        className={styles.buttonHostname}
        text="Hostname"
        onClick={onClickSortByHostname}
      />
      <ButtonSort className={styles.buttonPlayers} text="Players" onClick={onClickSortByPlayers} />
      <ButtonSort className={styles.buttonPing} text="Ping" onClick={onClickSortByPing} />
      <ButtonSort className={styles.buttonMode} text="Mode" onClick={onClickSortByMode} />
      <ButtonSort
        className={styles.buttonLanguage}
        text="Language"
        onClick={onClickSortByLanguage}
      />
      <ButtonSort className={styles.buttonMap} text="Map" onClick={onClickSortByMap} />
    </div>
  )
}
