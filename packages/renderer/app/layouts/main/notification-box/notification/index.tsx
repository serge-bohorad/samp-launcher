import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconError from '@app/assets/icons/error.svg'
import IconWarning from '@app/assets/icons/warning.svg'
import IconInfo from '@app/assets/icons/info.svg'
import IconClose from '@app/assets/icons/cross.svg'
import { useSelector } from '@app/hooks/common'

const NotificationComponent: FunctionComponent<Props> = (props) => {
  const { className, notification } = props

  const { deleteNotification } = useSelector(({ misc }) => misc)

  const { type, content } = notification.value

  const Icon =
    (type === 'error' && IconError) ||
    (type === 'warning' && IconWarning) ||
    (type === 'info' && IconInfo)

  const onClickClose = useCallback(() => {
    deleteNotification(notification)
  }, [notification])

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.content}>
        {type !== 'custom' && (
          <Icon
            className={cn(
              styles.iconType,
              { [styles.iconError]: type === 'error' },
              { [styles.iconWarning]: type === 'warning' },
              { [styles.iconInfo]: type === 'info' }
            )}
          />
        )}
        {content}
      </div>
      <IconButton className={styles.buttonClose} icon={IconClose} onClick={onClickClose} />
    </div>
  )
}

export const Notification = observer(NotificationComponent)
