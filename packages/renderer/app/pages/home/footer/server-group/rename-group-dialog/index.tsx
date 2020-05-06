import React, { FunctionComponent, useState, useCallback } from 'react'

import { onRenameGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const RenameGroupDialog: FunctionComponent = () => {
  const { subjectGroup, selectedGroup, setSubjectGroup, setRenameGroupDialogShown } = useSelector(
    ({ group }) => group
  )

  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setSubjectGroup()
    setRenameGroupDialogShown(false)
  }, [])

  const onClickRename = useCallback(async (groupName: string) => {
    const renamingError = await onRenameGroup(groupName, subjectGroup || selectedGroup)

    if (renamingError) {
      return setError(renamingError)
    }

    onClickClose()
  }, [])

  const groupName = subjectGroup?.name || selectedGroup?.name

  return (
    <DialogInput
      caption="Rename group"
      dimming={Boolean(subjectGroup)}
      autoSelect={true}
      initialValue={groupName}
      error={error}
      firstButtonText="Rename"
      onClickClose={onClickClose}
      onClickFirstButton={onClickRename}
      onClickSecondButton={onClickClose}
    />
  )
}
