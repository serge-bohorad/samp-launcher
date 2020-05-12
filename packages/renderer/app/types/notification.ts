import { ReactNode } from 'react'

export interface Notification {
  type: NotificationType
  content: ReactNode
}

export type NotificationType = 'error' | 'warning' | 'info' | 'custom'
