import { ConnectionOptions } from 'typeorm'

import { Group, Server, Settings } from './app/database/entities'
import { Initial1589265510662 } from './app/migrations/1589265510662-Initial'

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database/main.sqlite',
  synchronize: DEVELOPMENT,
  migrations: [Initial1589265510662],
  entities: [Group, Server, Settings],
  logging: false,
  migrationsRun: !DEVELOPMENT,
  cli: {
    migrationsDir: 'packages/main/app/migrations'
  }
}

export = config
