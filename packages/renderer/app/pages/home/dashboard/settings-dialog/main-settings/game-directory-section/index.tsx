import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { EditableSection } from '@app/components/particular/home/dashboard/settings-dialog/editable-section'

const GameDirectorySectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { gameDirectory, setEditGameDirectoryDialogShown } = useSelector(({ settings }) => settings)

  const onClickBrowsePath = useCallback(() => {
    setEditGameDirectoryDialogShown(true)
  }, [])

  return (
    <>
      <EditableSection
        className={className}
        caption="Game directory path"
        title={gameDirectory}
        onClick={onClickBrowsePath}
      >
        {gameDirectory || 'Game directory is not provided'}
      </EditableSection>
    </>
  )
}

export const GameDirectorySection = observer(GameDirectorySectionComponent)
