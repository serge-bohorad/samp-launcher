type RendererEvents = import('@shared/types/event-manager/renderer/events/index').RendererEvents
type RendererEventPayloads = import('@shared/types/event-manager/renderer/events/index').RendererEventPayloads

type MainEvents = import('@shared/types/event-manager/main/events/index').MainEvents
type MainEventPayloads = import('@shared/types/event-manager/main/events/index').MainEventPayloads
type MainEventReturns = import('@shared/types/event-manager/main/events/index').MainEventReturns

declare namespace NodeJS {
  interface Global {
    addEvent: <E extends keyof RendererEvents>(
      eventName: E,
      handler: (payload?: RendererEventPayloads[E]) => any
    ) => void
    invokeMain: <E extends keyof MainEvents>(
      eventName: E,
      payload?: MainEventPayloads[E]
    ) => Promise<[null | MainEventReturns[E], string | null]>
    invokeMainUnilaterally: <E extends keyof MainEvents>(
      eventName: E,
      payload?: MainEventPayloads[E]
    ) => void
  }
}

declare const invokeMain: NodeJS.Global['invokeMain']
declare const invokeMainUnilaterally: NodeJS.Global['invokeMainUnilaterally']
