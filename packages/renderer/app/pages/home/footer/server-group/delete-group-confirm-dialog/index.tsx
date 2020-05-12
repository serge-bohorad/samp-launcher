import React, { FunctionComponent, useCallback } from 'react'

import { onSaveDeletionConfirm } from '@app/services/settings'
import { onDeleteGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { QuestionDialog } from '@app/components/common'

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

  const onClickYes = useCallback((askNext: boolean) => {
    if (!askNext) {
      onSaveDeletionConfirm(false)
    }

    onDeleteGroup(subjectGroup || selectedGroup)

    onClickClose()
  }, [])

  const groupName = subjectGroup?.name || selectedGroup?.name

  return (
    <QuestionDialog
      caption="Group deletion confirmation"
      dimming={Boolean(subjectGroup)}
      onClickClose={onClickClose}
      onClickFirstButton={onClickYes}
      onClickSecondButton={onClickClose}
    >
      Are you sure you want to delete group <span className={styles.groupName}>{groupName}</span>?
    </QuestionDialog>
  )
}
