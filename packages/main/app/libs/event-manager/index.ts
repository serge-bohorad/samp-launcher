import { ipcMain } from 'electron'

import { MainEvents } from '@shared/types/event-manager/main/events'
import { EventsHandlers, EventHandler } from './types'

export namespace EventManager {
  const eventsHandlers: EventsHandlers = {}

  export function add<E extends keyof MainEvents>(eventName: E, handler: EventHandler<E>): void {
    eventsHandlers[eventName] = handler
  }

  export function remove<E extends keyof MainEvents>(eventName: E): void {
    delete eventsHandlers[eventName]
  }

  ipcMain.handle(
    'REQUEST_DEFFERED',
    async (_, eventName, payload): Promise<any> => {
      try {
        const handler = eventsHandlers[eventName]

        if (!handler) {
          return Logger.warning(`Handler for "${eventName}" not found`)
        }

        const result = await handler(payload)

        return result || [null, null]
      } catch (error) {
        Logger.runtimeError(error)

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
          return Logger.warning(`Handler for "${eventName}" not found`)
        }

        await handler(payload)
      } catch (error) {
        Logger.runtimeError(error)
      }
    }
  )
}
