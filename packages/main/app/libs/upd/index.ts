import { Socket, SocketType, createSocket } from 'dgram'

import { EventHandlers } from './types'

import { Deferred } from '@shared/misc/deferred'

export class Udp {
  private socket: Socket
  private timer: NodeJS.Timeout
  private timeout: number
  private pendingDatagram: Deferred | null

  constructor(type: SocketType, timeout = 1000) {
    this.socket = createSocket(type, this.onMessage)
    this.timeout = timeout

    this.socket.bind()
    this.socket.on('error', () => 0)
  }

  sendAsync = (
    rawMessage: string,
    host: string,
    port: number,
    timeout?: number
  ): Promise<Buffer | undefined> => {
    this.pendingDatagram = new Deferred()

    this.timer = setTimeout(this.onTimeout, timeout || this.timeout)

    this.send(rawMessage, host, port)

    return this.pendingDatagram.promise
  }

  send = (rawMessage: string, host: string, port: number): void => {
    const message = Buffer.from(rawMessage, 'ascii')

    this.socket.send(message, port, host)
  }

  private onMessage = (message: Buffer): void => {
    if (!this.pendingDatagram) {
      return
    }

    clearTimeout(this.timer)

    this.pendingDatagram.resolve(message)

    this.pendingDatagram = null
  }

  close = (): void => {
    this.socket.close()
  }

  on = <E extends keyof EventHandlers>(event: E, listener: EventHandlers[E]): Socket => {
    return this.socket.on(event, listener)
  }

  private onTimeout = (): void => {
    if (!this.pendingDatagram) {
      return
    }

    this.pendingDatagram.resolve()

    this.pendingDatagram = null
  }
}
