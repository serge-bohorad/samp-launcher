import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class Settings {
  constructor() {
    this.id = 0
    this.extraInject = []
  }

  @PrimaryColumn()
  id: number

  @Column({ default: '' })
  nickname: string

  @Column({ default: '' })
  gameDirectory: string

  @Column({ default: true })
  autoSwitchNickname: boolean

  @Column({ default: true })
  deletionConfirm: boolean

  @Column({ default: 1000 })
  serverRefreshDelay: number

  @Column({ default: false })
  refreshAllServers: boolean

  @Column({ type: 'simple-json' })
  extraInject: string[]
}
