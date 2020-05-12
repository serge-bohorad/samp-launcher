import { RunningPayload } from '../payloads/game'

export interface GameEvents {
  GAME_RUN
}

export interface GameEventsPayload {
  GAME_RUN: RunningPayload
}

export interface GameEventsReturns {
  GAME_RUN
}
