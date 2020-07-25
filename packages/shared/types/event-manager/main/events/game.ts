import { RunningPayload } from '../payloads/game'

export interface GameEvents {
  GAME_RUN
}

export interface GameEventPayloads {
  GAME_RUN: RunningPayload
}

export interface GameEventReturns {
  GAME_RUN
}
