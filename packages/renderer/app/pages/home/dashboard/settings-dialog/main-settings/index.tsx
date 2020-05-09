import React, { FunctionComponent } from 'react'

import { Props } from './types'

import { SectionContainer } from '@app/components/particular/home/dashboard/settings-dialog/section-container'
import { GameDirectorySection } from './game-directory-section'
import { AutoSwitchNicknameSection } from './auto-switch-nickname-section'
import { ConfirmDeletionSection } from './confirm-deletion-section'

export const MainSettings: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <SectionContainer className={className} caption="Main">
      <GameDirectorySection />
      <AutoSwitchNicknameSection />
      <ConfirmDeletionSection />
    </SectionContainer>
  )
}
