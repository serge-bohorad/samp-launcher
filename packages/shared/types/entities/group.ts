import { Server } from './server'

export interface Group {
  id: number
  name: string
  selected: boolean
  servers: Server[]
}
