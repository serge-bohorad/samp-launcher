import {
  MainEvents,
  MainEventsPayload,
  MainEventsReturns
} from '@shared/types/event-manager/main/events'

export type EventsHandlers = {
  [key in keyof MainEvents]?: EventHandler<any>
}

export type EventHandler<E extends keyof MainEvents> = (
  payload: MainEventsPayload[E]
) => Promise<[null | MainEventsReturns[E], string | null] | void>
