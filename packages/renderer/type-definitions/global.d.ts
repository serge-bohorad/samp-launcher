type RendererEvents = import('@shared/types/event-manager/renderer/events/index').RendererEvents
type RendererEventsPayload = import('@shared/types/event-manager/renderer/events/index').RendererEventsPayload

type MainEvents = import('@shared/types/event-manager/main/events/index').MainEvents
type MainEventsPayload = import('@shared/types/event-manager/main/events/index').MainEventsPayload
type MainEventsReturns = import('@shared/types/event-manager/main/events/index').MainEventsReturns

declare namespace NodeJS {
  interface Global {
    addEvent: <E extends keyof RendererEvents>(
      eventName: E,
      handler: (payload?: RendererEventsPayload[E]) => any
    ) => void
    invokeMain: <E extends keyof MainEvents>(
      eventName: E,
      payload?: MainEventsPayload[E]
    ) => Promise<[null | MainEventsReturns[E], string | null]>
    invokeMainUnilaterally: <E extends keyof MainEvents>(
      eventName: E,
      payload?: MainEventsPayload[E]
    ) => void
  }
}

declare const invokeMain: NodeJS.Global['invokeMain']
declare const invokeMainUnilaterally: NodeJS.Global['invokeMainUnilaterally']
