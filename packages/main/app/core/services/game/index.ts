import {
  DETACHED_PROCESS,
  CREATE_SUSPENDED,
  createProcess,
  injectDll,
  resumeThread,
  closeHandle
} from 'windows-process-manager'

import { RunningPayload } from '@shared/types/event-manager/main/payloads/game'

export namespace Game {
  export async function run(payload: RunningPayload): Promise<void> {
    const { processId, threadHandle, processHandle } = await createProcess(
      `${payload.gameDirectory}/gta_sa.exe`,
      {
        args: generateConnectionArgs(payload),
        flags: DETACHED_PROCESS | CREATE_SUSPENDED,
        cwd: payload.gameDirectory
      }
    )

    payload.extraInject.unshift(`${payload.gameDirectory}/samp.dll`)

    await Promise.all(payload.extraInject.map((path) => injectDll(processId, path)))

    resumeThread(threadHandle)

    closeHandle(threadHandle)
    closeHandle(processHandle)
  }

  function generateConnectionArgs(payload: RunningPayload): string {
    return [
      '-c',
      `-n ${payload.nickname}`,
      `-h ${payload.host}`,
      `-p ${payload.port}`,
      `-z ${payload.password}`
    ].join(' ')
  }
}
