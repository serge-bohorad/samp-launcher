/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { Group } from './group'

@Entity()
export class Server {
  constructor(host: string, port: number, group: Group) {
    this.host = host
    this.port = port
    this.extraInject = []
    this.group = group
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: '' })
  name: string

  @Column()
  host: string

  @Column()
  port: number

  @Column({ default: '' })
  description: string

  @Column({ default: '' })
  nickname: string

  @Column({ default: '' })
  password: string

  @Column({ type: 'simple-json' })
  extraInject: Pair<string>[]

  @ManyToOne(() => Group, (group) => group.servers, { onDelete: 'CASCADE' })
  group: Group
}
