import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { onDeleteGroup } from '@app/services/group'

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
    group: {
      selectedGroup,
      setCreateGroupDialogShown,
      setDeleteGroupConfirmDialogShown,
      setManageGroupDialogShown,
      setRenameGroupDialogShown
    },
    settings: { deletionConfirm }
  } = useSelector((store) => store)

  const onClickCreate = useCallback(() => {
    setCreateGroupDialogShown(true)
  }, [])

  const onClickDelete = useCallback(() => {
    if (deletionConfirm) {
      return setDeleteGroupConfirmDialogShown(true)
    }

    onDeleteGroup()
  }, [deletionConfirm])

  const onClickManage = useCallback(() => {
    setManageGroupDialogShown(true)
  }, [])

  const onClickEditName = useCallback(() => {
    setRenameGroupDialogShown(true)
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={cn(styles.button, styles.buttonCreate)}
        title="Create a new group"
        icon={IconCreate}
        onClick={onClickCreate}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        title="Delete the selected group"
        disabled={!selectedGroup}
        icon={IconDelete}
        onClick={onClickDelete}
      />
      <IconButton
        className={styles.button}
        title="Manage groups"
        disabled={!selectedGroup}
        icon={IconManage}
        onClick={onClickManage}
      />
      <IconButton
        className={styles.button}
        title="Rename the selected group"
        disabled={!selectedGroup}
        icon={IconEditName}
        onClick={onClickEditName}
      />
    </div>
  )
}

export const ControlBox = observer(ControlBoxComponent)
