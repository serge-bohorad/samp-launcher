import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'
import { CaptionValue } from '@app/components/common'
import { ControlBox } from './control-box'

import styles from './styles.scss'

export const ServerGroup: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server group" />
      <CaptionValue className={styles.selectedGroup} caption="Selected group">
        Selected group name
      </CaptionValue>
      <ControlBox className={styles.controlBox} />
    </div>
  )
}
