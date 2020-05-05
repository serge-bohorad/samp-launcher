/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Server } from './server'

@Entity()
export class Group {
  constructor(name: string) {
    this.name = name
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ default: true })
  selected: boolean

  @OneToMany(() => Server, (server) => server.group, { cascade: true })
  servers: Server[]
}
