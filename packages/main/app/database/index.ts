/* eslint-disable import/namespace */
import { Connection, createConnection } from 'typeorm'

import * as config from '../../ormconfig'

export function createDatabaseConnection(): Promise<Connection> {
  return createConnection(config)
}
