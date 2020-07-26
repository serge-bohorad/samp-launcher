import { observable, action } from 'mobx'

import { Notification } from '@app/types/notification'

export class MiscStore {
  @observable usingCommonNickname = true
  readonly notifications = observable<Pair<Notification>>([])

  @action setUsingCommonNickname = (state: boolean): void => {
    this.usingCommonNickname = state
  }

  @action addNotification = (notification: Notification, displayTime = 7000): void => {
    this.notifications.push(Pair.create(notification))

    if (displayTime > 0) {
      const targetNotification = ExArray.getLast(this.notifications)!

      setTimeout(() => this.deleteNotification(targetNotification), displayTime)
    }
  }

  @action deleteNotification = (notification: Pair<Notification>): void => {
    this.notifications.remove(notification)
  }

  @action clearNotifications = (): void => {
    this.notifications.clear()
  }
}

export const miscStore = new MiscStore()
