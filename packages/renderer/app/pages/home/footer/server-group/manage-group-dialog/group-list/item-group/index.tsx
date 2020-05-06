import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { onSwitchSelectedGroup } from '@app/services/group'

import { useSelector } from '@app/hooks/common'

import { ControlBox } from './control-box'

import styles from './styles.scss'

import IconSelectedGroup from '@app/assets/icons/star.svg'

const ItemGroupComponent: FunctionComponent<Props> = (props) => {
  const { className, selected, group } = props

  const { setManageGroupDialogShown } = useSelector(({ group }) => group)

  const onClickSelect = useCallback(() => {
    onSwitchSelectedGroup(group)

    setManageGroupDialogShown(false)
  }, [group])

  return (
    <div className={cn(styles.container, className)} onDoubleClick={onClickSelect}>
      {selected && <IconSelectedGroup className={styles.iconSelectedGroup} />}
      <div className={styles.groupName} title={group.name}>
        {group.name}
      </div>
      <ControlBox className={styles.controlBox} group={group} />
    </div>
  )
}

export const ItemGroup = observer(ItemGroupComponent)
