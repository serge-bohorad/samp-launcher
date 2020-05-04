import { ConnectionOptions } from 'typeorm'

import { Group, Server } from './app/database/entities'

const { NODE_ENV } = process.env

export const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database/main.sqlite',
  synchronize: NODE_ENV === 'development',
  migrations: ['packages/**/migrations/*.ts'],
  logging: false,
  entities: [Group, Server],
  cli: {
    migrationsDir: 'packages/main/app/migrations'
  }
}

module.exports = config
