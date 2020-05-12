import { Socket, RemoteInfo } from 'dgram'

export interface EventHandlers {
  close: (event: 'close', listener: () => void) => Socket
  connect: (event: 'connect', listener: () => void) => Socket
  error: (event: 'error', listener: (err: Error) => void) => Socket
  listening: (event: 'listening', listener: () => void) => Socket
  message: (event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void) => Socket
}
