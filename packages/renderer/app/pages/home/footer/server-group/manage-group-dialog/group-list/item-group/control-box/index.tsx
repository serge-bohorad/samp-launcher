import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { onDeleteGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconRename from '@app/assets/icons/edit.svg'
import IconDelete from '@app/assets/icons/cross.svg'

const ControlBoxComponent: FunctionComponent<Props> = (props) => {
  const { className, group } = props

  const {
    group: { setSubjectGroup, setRenameGroupDialogShown, setDeleteGroupConfirmDialogShown },
    settings: { deletionConfirm }
  } = useSelector((store) => store)

  const onClickRename = useCallback(() => {
    setSubjectGroup(group)

    setRenameGroupDialogShown(true)
  }, [group])

  const onClickDelete = useCallback(() => {
    if (deletionConfirm) {
      setSubjectGroup(group)
      setDeleteGroupConfirmDialogShown(true)
      return
    }

    onDeleteGroup(group)
  }, [deletionConfirm, group])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={styles.button}
        title="Rename group"
        icon={IconRename}
        onClick={onClickRename}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        title="Delete group"
        icon={IconDelete}
        onClick={onClickDelete}
      />
    </div>
  )
}

export const ControlBox = observer(ControlBoxComponent)
