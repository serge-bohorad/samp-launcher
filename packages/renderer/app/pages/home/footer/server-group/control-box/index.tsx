import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconCreate from '@app/assets/icons/plus-square.svg'
import IconDelete from '@app/assets/icons/cross-square.svg'
import IconList from '@app/assets/icons/list-square.svg'
import IconEditName from '@app/assets/icons/pencil-square.svg'

export const ControlBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickCreate = useCallback(() => {
    //
  }, [])

  const onClickDelete = useCallback(() => {
    //
  }, [])

  const onClickShowList = useCallback(() => {
    //
  }, [])

  const onClickEditName = useCallback(() => {
    //
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={cn(styles.button, styles.buttonCreate)}
        icon={IconCreate}
        onClick={onClickCreate}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        icon={IconDelete}
        onClick={onClickDelete}
      />
      <IconButton className={styles.button} icon={IconList} onClick={onClickShowList} />
      <IconButton className={styles.button} icon={IconEditName} onClick={onClickEditName} />
    </div>
  )
}
