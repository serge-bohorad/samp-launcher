import { Connection, createConnection } from 'typeorm'

import { config } from '../../ormconfig'

export function createDatabaseConnection(): Promise<Connection> {
  return createConnection(config)
}
