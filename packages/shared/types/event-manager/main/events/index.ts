/* eslint-disable @typescript-eslint/no-empty-interface */
import { MiscEvents, MiscEventPayloads, MiscEventReturns } from './misc'
import { GroupEvents, GroupEventPayloads, GroupEventReturns } from './group'
import { ServerEvents, ServerEventPayloads, ServerEventReturns } from './server'
import { SettingsEvents, SettingsEventPayloads, SettingsEventReturns } from './settings'
import { GameEvents, GameEventPayloads, GameEventReturns } from './game'

export interface MainEvents
  extends MiscEvents,
    GroupEvents,
    ServerEvents,
    SettingsEvents,
    GameEvents {}

export interface MainEventPayloads
  extends MiscEventPayloads,
    GroupEventPayloads,
    ServerEventPayloads,
    SettingsEventPayloads,
    GameEventPayloads {}

export interface MainEventReturns
  extends MiscEventReturns,
    GroupEventReturns,
    ServerEventReturns,
    SettingsEventReturns,
    GameEventReturns {}
