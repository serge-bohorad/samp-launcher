/* eslint-disable @typescript-eslint/no-empty-interface */
import { MiscEvents, MiscEventsPayload, MiscEventsReturns } from './misc'
import { GroupEvents, GroupEventsPayload, GroupEventsReturns } from './group'
import { ServerEvents, ServerEventsPayload, ServerEventsReturns } from './server'
import { SettingsEvents, SettingsEventsPayload, SettingsEventsReturns } from './settings'

export interface MainEvents extends MiscEvents, GroupEvents, ServerEvents, SettingsEvents {}

export interface MainEventsPayload
  extends MiscEventsPayload,
    GroupEventsPayload,
    ServerEventsPayload,
    SettingsEventsPayload {}

export interface MainEventsReturns
  extends MiscEventsReturns,
    GroupEventsReturns,
    ServerEventsReturns,
    SettingsEventsReturns {}
