import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconCreate from '@app/assets/icons/plus-square.svg'
import IconDelete from '@app/assets/icons/cross-square.svg'
import IconManage from '@app/assets/icons/list-square.svg'
import IconEditName from '@app/assets/icons/pencil-square.svg'

const ControlBoxComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    selectedGroup,
    setCreateGroupDialogShown,
    setDeleteGroupConfirmDialogShown
  } = useSelector(({ group }) => group)

  const onClickCreate = useCallback(() => {
    setCreateGroupDialogShown(true)
  }, [])

  const onClickDelete = useCallback(() => {
    if (!selectedGroup) {
      return
    }

    setDeleteGroupConfirmDialogShown(true)
  }, [selectedGroup])

  const onClickManage = useCallback(() => {
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
      <IconButton className={styles.button} icon={IconManage} onClick={onClickManage} />
      <IconButton className={styles.button} icon={IconEditName} onClick={onClickEditName} />
    </div>
  )
}

export const ControlBox = observer(ControlBoxComponent)
