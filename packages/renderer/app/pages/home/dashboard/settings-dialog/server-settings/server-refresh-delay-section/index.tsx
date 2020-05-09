import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { EditableSection } from '@app/components/particular/home/dashboard/settings-dialog/editable-section'
import { EditServerRefreshDelayDialog } from './edit-server-refresh-delay-dialog'

export const ServerRefreshDelaySectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    serverRefreshDelay,
    editServerRefreshDelayDialogShown,
    setEditServerRefreshDelayDialogShown
  } = useSelector(({ settings }) => settings)

  const onClickEditDelay = useCallback(() => {
    setEditServerRefreshDelayDialogShown(true)
  }, [])

  return (
    <>
      <EditableSection
        className={className}
        caption="Server refresh delay"
        onClick={onClickEditDelay}
      >
        {serverRefreshDelay} ms
      </EditableSection>

      {editServerRefreshDelayDialogShown && <EditServerRefreshDelayDialog />}
    </>
  )
}

export const ServerRefreshDelaySection = observer(ServerRefreshDelaySectionComponent)
