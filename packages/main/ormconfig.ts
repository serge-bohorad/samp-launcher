import { ConnectionOptions } from 'typeorm'

import { Group, Server, Settings } from './app/database/entities'

const { NODE_ENV } = process.env

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database/main.sqlite',
  synchronize: NODE_ENV === 'development',
  migrations: ['packages/**/migrations/*.ts'],
  logging: false,
  entities: [Group, Server, Settings],
  cli: {
    migrationsDir: 'packages/main/app/migrations'
  }
}

export = config
