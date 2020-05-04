/* eslint-disable @typescript-eslint/no-empty-interface */
import { MiscEvents, MiscEventsPayload, MiscEventsReturns } from './misc'
import { GroupEvents, GroupEventsPayload, GroupEventsReturns } from './group'
import { ServerEvents, ServerEventsPayload, ServerEventsReturns } from './server'

export interface MainEvents extends MiscEvents, GroupEvents, ServerEvents {}

export interface MainEventsPayload
  extends MiscEventsPayload,
    GroupEventsPayload,
    ServerEventsPayload {}

export interface MainEventsReturns
  extends MiscEventsReturns,
    GroupEventsReturns,
    ServerEventsReturns {}
