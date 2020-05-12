import React, { FunctionComponent } from 'react'

import { useSelector } from '@app/hooks/common'

import styles from './styles.scss'

export const SwitchNicknameNotification: FunctionComponent = () => {
  const { usingCommonNickname } = useSelector(({ misc }) => misc)

  const type = usingCommonNickname ? 'common' : 'server'

  return (
    <span>
      From now <span className={styles.highlight}>{type}</span> nickname will be used
    </span>
  )
}
