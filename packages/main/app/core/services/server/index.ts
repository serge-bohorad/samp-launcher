import { isIPv4 } from 'net'
import dns from 'dns'
import { performance } from 'perf_hooks'
import { decode } from 'iconv-lite'

import { ServerInfo } from '@shared/types/entities'

import { errorFailedPing } from './data'

import { Udp } from '@app/libs/upd'

export namespace Server {
  export async function getIpByHostname(host: string): Promise<[string | null, string | null]> {
    try {
      if (isIPv4(host)) {
        return [host, null]
      }

      const { address } = await dns.promises.lookup(host)

      return [address, null]
    } catch (error) {
      Logger.error(errorFailedPing)

      return [null, errorFailedPing]
    }
  }

  export async function getPing(host: string, port: number): Promise<number | void> {
    const packet = generateCommonPacket(host, port)

    const udp = new Udp('udp4', 1000)

    const startTime = performance.now()
    const response = await udp.sendAsync(packet + 'p' + '0000', host, port)
    const endTime = performance.now()

    udp.close()

    if (!response) {
      return
    }

    return Math.round(endTime - startTime)
  }

  export async function getInfo(host: string, port: number): Promise<ServerInfo | void> {
    const packet = generateCommonPacket(host, port)

    const udp = new Udp('udp4', 1000)

    const rawInfo = await udp.sendAsync(packet + 'i', host, port)

    if (!rawInfo) {
      return udp.close()
    }

    const rawRules = await udp.sendAsync(packet + 'r', host, port)

    if (!rawRules) {
      return udp.close()
    }

    return { ...parseInfo(rawInfo), ...parseRules(rawRules) }
  }

  function generateCommonPacket(address: string, port: number): string {
    const splitedAddress = address.split('.').map(Number)
    const firstPortByte = port & 0xff
    const secondPortByte = (port >> 8) & 0xff

    return 'SAMP' + String.fromCharCode(...splitedAddress, firstPortByte, secondPortByte)
  }

  function parseInfo(rawInfo: Buffer): ServerInfo {
    const buffer = rawInfo.slice(11) // Cut response prefix

    const locked = buffer.readUInt8(0)

    let offset = 1

    const players = buffer.readUInt16LE(offset)

    offset += 2

    const maxPlayers = buffer.readUInt16LE(offset)

    offset += 2

    const hostnameLength = buffer.readUInt32LE(offset)

    offset += 4

    const rawHostname = buffer.slice(offset, offset + hostnameLength)
    const hostname = decode(rawHostname, 'win1251')

    offset += hostnameLength

    const modeLength = buffer.readUInt32LE(offset)

    offset += 4

    const rawMode = buffer.slice(offset, offset + modeLength)
    const mode = decode(rawMode, 'win1251')

    offset += modeLength

    const languageLength = buffer.readUInt32LE(offset)

    offset += 4

    const rawLanguage = buffer.slice(offset, offset + languageLength)
    const language = decode(rawLanguage, 'win1251')

    return {
      locked: Boolean(locked),
      players,
      maxPlayers,
      hostname,
      mode,
      language
    }
  }

  function parseRules(rawRules: Buffer): ServerInfo {
    const rules = {}

    const buffer = rawRules.slice(11) // Cut response prefix

    const rulesCount = buffer.readUInt16LE(0)

    let offset = 2

    for (let n = 0; n < rulesCount; n++) {
      const propertyNameLength = buffer.readUInt8(offset)

      offset += 1

      const rawPropertyName = buffer.slice(offset, offset + propertyNameLength)
      const propertyName = decode(rawPropertyName, 'win1251')

      offset += propertyNameLength

      const valueLength = buffer.readUInt8(offset)

      offset += 1

      const rawValue = buffer.slice(offset, offset + valueLength)
      const value = decode(rawValue, 'win1251')

      offset += valueLength

      rules[propertyName] = value
    }

    return rules
  }
}
