import React, { FunctionComponent, useCallback } from 'react'

import { onSaveServerDescription } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogInput } from '@app/components/common'

export const EditServerDescriptionDialog: FunctionComponent = () => {
  const { selectedServer, setEditServerDescriptionDialogShown } = useSelector(
    ({ server }) => server
  )

  const { description } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setEditServerDescriptionDialogShown(false)
  }, [])

  const onClickSave = useCallback(async (newDescription: string) => {
    onSaveServerDescription(newDescription)

    onClickClose()
  }, [])

  return (
    <DialogInput
      caption="Edit server description"
      autoSelect={true}
      placeholder="Server description"
      initialValue={description}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={onClickSave}
      onClickSecondButton={onClickClose}
    />
  )
}
