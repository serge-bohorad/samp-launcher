import { Socket, RemoteInfo } from 'dgram'

export interface EventHandlers {
  close: (eventName: 'close', listener: () => void) => Socket
  connect: (eventName: 'connect', listener: () => void) => Socket
  error: (eventName: 'error', listener: (err: Error) => void) => Socket
  listening: (eventName: 'listening', listener: () => void) => Socket
  message: (eventName: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void) => Socket
}
