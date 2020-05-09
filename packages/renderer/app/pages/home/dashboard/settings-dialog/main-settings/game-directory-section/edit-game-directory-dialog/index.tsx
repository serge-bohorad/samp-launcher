import React, { FunctionComponent, useCallback, useState } from 'react'

import { showSystemDialog } from '@app/services/misc'
import { onSaveGameDirectory } from '@app/services/settings'

import { useSelector, useInputCallback } from '@app/hooks/common'

import { Dialog, Input, IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconBrowseFolder from '@app/assets/icons/folder.svg'

export const EditGameDirectoryDialog: FunctionComponent = () => {
  const { gameDirectory, setEditGameDirectoryDialogShown } = useSelector(({ settings }) => settings)

  const [disabled, setDisabled] = useState(false)
  const [tempPath, setTempPath] = useState(gameDirectory)
  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setEditGameDirectoryDialogShown(false)
  }, [])

  const onChangeTempPath = useInputCallback(({ value }) => {
    setTempPath(value)
  })

  const onClickBrowseFolder = useCallback(async () => {
    setDisabled(true)

    const result = await showSystemDialog('openDirectory')

    if (result) {
      setTempPath(result[0])
    }

    setDisabled(false)
  }, [])

  const onClickSave = useCallback(async () => {
    const savingError = await onSaveGameDirectory(tempPath)

    if (savingError) {
      return setError(savingError)
    }

    onClickClose()
  }, [tempPath])

  return (
    <Dialog
      className={styles.container}
      caption="Edit game directory path"
      concave={true}
      dimming={true}
      disabled={disabled}
      closable={!disabled}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={onClickSave}
      onClickSecondButton={onClickClose}
    >
      <div className={styles.content}>
        <Input
          className={styles.input}
          placeholder="Game directory path"
          value={tempPath}
          onChange={onChangeTempPath}
        />
        <IconButton
          className={styles.buttonBrowse}
          icon={IconBrowseFolder}
          onClick={onClickBrowseFolder}
        />
      </div>
      <div className={styles.error}>{error}</div>
    </Dialog>
  )
}
