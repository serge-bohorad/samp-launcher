import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'

import { useSelector } from '@app/hooks/common'

import { IconButton } from '@app/components/common'
import { Notification } from './notification'

import styles from './styles.scss'

import IconClear from '@app/assets/icons/rubbish2.svg'

const NotificationBoxComponent: FunctionComponent = () => {
  const { notifications, clearNotifications } = useSelector(({ misc }) => misc)

  const onClickClear = useCallback(() => {
    clearNotifications()
  }, [])

  return (
    <>
      {!!notifications.length && (
        <div className={styles.container}>
          <IconButton
            className={styles.buttonClear}
            title="Clear all notifications"
            icon={IconClear}
            onClick={onClickClear}
          />
          <div className={styles.notificationContainer}>
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                className={styles.notification}
                notification={notification}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export const NotificationBox = observer(NotificationBoxComponent)
