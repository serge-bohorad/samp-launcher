import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { KeyValue } from '@app/components/common'

import styles from './styles.scss'

const ServerInfoComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { selectedServer } = useSelector(({ server }) => server)

  const {
    host,
    port,
    players = 0,
    maxPlayers = 0,
    ping = 0,
    mode = '-',
    language = '-',
    worldtime = '-'
  } = selectedServer || {}

  const address = `${host}:${port}`
  const finalPlayers = `${players} / ${maxPlayers}`

  return (
    <div className={className}>
      <KeyValue
        className={styles.field}
        keyClassName={styles.fieldKey}
        title={address}
        selectable={true}
        keyText="Address:"
      >
        {address}
      </KeyValue>
      <KeyValue className={styles.field} keyClassName={styles.fieldKey} keyText="Players:">
        {finalPlayers}
      </KeyValue>
      <KeyValue className={styles.field} keyClassName={styles.fieldKey} keyText="Ping:">
        {ping}
      </KeyValue>
      <KeyValue
        className={styles.field}
        keyClassName={styles.fieldKey}
        title={mode}
        keyText="Mode:"
      >
        {mode}
      </KeyValue>
      <KeyValue
        className={styles.field}
        keyClassName={styles.fieldKey}
        title={language}
        keyText="Language:"
      >
        {language}
      </KeyValue>
      <KeyValue className={styles.field} keyClassName={styles.fieldKey} keyText="World time:">
        {worldtime}
      </KeyValue>
    </div>
  )
}

export const ServerInfo = observer(ServerInfoComponent)
