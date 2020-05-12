/* eslint-disable @typescript-eslint/no-empty-interface */
import { MiscEvents, MiscEventsPayload, MiscEventsReturns } from './misc'
import { GroupEvents, GroupEventsPayload, GroupEventsReturns } from './group'
import { ServerEvents, ServerEventsPayload, ServerEventsReturns } from './server'
import { SettingsEvents, SettingsEventsPayload, SettingsEventsReturns } from './settings'
import { GameEvents, GameEventsPayload, GameEventsReturns } from './game'

export interface MainEvents
  extends MiscEvents,
    GroupEvents,
    ServerEvents,
    SettingsEvents,
    GameEvents {}

export interface MainEventsPayload
  extends MiscEventsPayload,
    GroupEventsPayload,
    ServerEventsPayload,
    SettingsEventsPayload,
    GameEventsPayload {}

export interface MainEventsReturns
  extends MiscEventsReturns,
    GroupEventsReturns,
    ServerEventsReturns,
    SettingsEventsReturns,
    GameEventsReturns {}
