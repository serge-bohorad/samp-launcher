import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'

import styles from './styles.scss'

const ServerDescriptionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { selectedServer } = useSelector(({ server }) => server)

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server description" />
      <div className={styles.description}>{selectedServer?.description}</div>
    </div>
  )
}

export const ServerDescription = observer(ServerDescriptionComponent)
