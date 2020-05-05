import { ipcMain } from 'electron'

import { MainEvents } from '@shared/types/event-manager/main/events'
import { EventsHandlers, EventHandler } from './types'

export namespace EventManager {
  const eventsHandlers: EventsHandlers = {}

  export function add<E extends keyof MainEvents>(event: E, handler: EventHandler<E>): void {
    eventsHandlers[event] = handler
  }

  export function remove<E extends keyof MainEvents>(event: E): void {
    delete eventsHandlers[event]
  }

  ipcMain.on(
    'REQUEST_DEFFERED',
    async (_, eventName, payload): Promise<any> => {
      try {
        const handler = eventsHandlers[eventName]

        if (!handler) {
          return Logger.warning(`Handler for "${event}" not found`)
        }

        const result = await handler(payload)

        return result || [null, null]
      } catch (error) {
        Logger.error(error)

        return [null, 'Runtime error has occurred']
      }
    }
  )

  ipcMain.on(
    'REQUEST_UNILATERALLY',
    async (_, eventName, payload): Promise<any> => {
      try {
        const handler = eventsHandlers[eventName]

        if (!handler) {
          return Logger.warning(`Handler for "${event}" not found`)
        }

        handler(payload)
      } catch (error) {
        Logger.error(error)
      }
    }
  )
}
