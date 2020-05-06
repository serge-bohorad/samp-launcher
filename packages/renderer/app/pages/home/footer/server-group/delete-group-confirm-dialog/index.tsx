import React, { FunctionComponent, useCallback } from 'react'

import { onDeleteGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { DialogConfirm } from '@app/components/common'

import styles from './styles.scss'

export const DeleteGroupConfirmDialog: FunctionComponent = () => {
  const {
    subjectGroup,
    selectedGroup,
    setSubjectGroup,
    setDeleteGroupConfirmDialogShown
  } = useSelector(({ group }) => group)

  const onClickClose = useCallback(() => {
    setSubjectGroup()

    setDeleteGroupConfirmDialogShown(false)
  }, [])

  // TODO: check showConfirm
  const onClickYes = useCallback((showConfirmNext: boolean) => {
    onDeleteGroup(subjectGroup || selectedGroup)

    onClickClose()
  }, [])

  const groupName = subjectGroup?.name || selectedGroup?.name

  return (
    <DialogConfirm
      caption="Group deletion confirmation"
      checkboxHint="Don't ask me anymore"
      dimming={Boolean(subjectGroup)}
      onClickClose={onClickClose}
      onClickFirstButton={onClickYes}
      onClickSecondButton={onClickClose}
    >
      Are you sure you want to delete group <span className={styles.groupName}>{groupName}</span>?
    </DialogConfirm>
  )
}
