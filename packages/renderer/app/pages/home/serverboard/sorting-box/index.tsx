import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { ButtonSort } from './button-sort'

import styles from './styles.scss'

export const SortingBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickSortByHostname = useCallback(() => {
    //
  }, [])

  const onClickSortByPlayers = useCallback(() => {
    //
  }, [])

  const onClickSortByPing = useCallback(() => {
    //
  }, [])

  const onClickSortByMode = useCallback(() => {
    //
  }, [])

  const onClickSortByLanguage = useCallback(() => {
    //
  }, [])

  const onClickSortByMap = useCallback(() => {
    //
  }, [])

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
