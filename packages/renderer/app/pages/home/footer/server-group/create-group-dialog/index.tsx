import React, { FunctionComponent, useState, useCallback } from 'react'

import { onCreateGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const CreateGroupDialog: FunctionComponent = () => {
  const { setCreateGroupDialogShown } = useSelector(({ group }) => group)

  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setCreateGroupDialogShown(false)
  }, [])

  const onClickCreate = useCallback(async (groupName: string) => {
    const creationError = await onCreateGroup(groupName)

    if (creationError) {
      return setError(creationError)
    }

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Create group"
      placeholder="Group name"
      error={error}
      firstButtonText="Create"
      onClickClose={onClickClose}
      onClickFirstButton={onClickCreate}
      onClickSecondButton={onClickClose}
    />
  )
}
