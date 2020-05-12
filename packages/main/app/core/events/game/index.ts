import { existsSync } from 'fs'

import { errorGameExeNotFound, errorSampDllNotFound } from './data'

import { EventManager } from '@app/libs/event-manager'
import { Service } from '@app/core/services'

EventManager.add('GAME_RUN', async (payload) => {
  if (!existsSync(`${payload.gameDirectory}/gta_sa.exe`)) {
    return [null, errorGameExeNotFound]
  }

  if (!existsSync(`${payload.gameDirectory}/samp.dll`)) {
    return [null, errorSampDllNotFound]
  }

  await Service.Game.run(payload)
})
