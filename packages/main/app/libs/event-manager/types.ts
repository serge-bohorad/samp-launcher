import {
  MainEvents,
  MainEventPayloads,
  MainEventReturns
} from '@shared/types/event-manager/main/events'

export type EventsHandlers = {
  [key in keyof MainEvents]?: EventHandler<any>
}

export type EventHandler<E extends keyof MainEvents> = (
  payload: MainEventPayloads[E]
) => Promise<[null | MainEventReturns[E], string | null] | void>
