import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'
import { CaptionValue, IconButton, Link } from '@app/components/common'

import styles from './styles.scss'

import IconCopyAddress from '@app/assets/icons/copy.svg'
import { copyToClipboard } from '@app/services/misc'

const ServerDetailComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    server: { selectedServer },
    misc: { addNotification }
  } = useSelector((store) => store)

  const { host, port, weburl, version = '-' } = selectedServer || {}

  const address = host ? `${host}:${port}` : '-'
  const webSite = weburl ? <Link text={weburl} /> : '-'

  const onClickCopyAddress = useCallback(() => {
    copyToClipboard(address)

    addNotification({ type: 'info', content: 'The address has been copied' })
  }, [address])

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server information" />
      <div className={styles.addressWrapper}>
        <CaptionValue className={cn(styles.detail, styles.address)} caption="Address">
          {address}
        </CaptionValue>
        {selectedServer && (
          <IconButton
            className={styles.buttonCopyAddress}
            title="Copy address"
            icon={IconCopyAddress}
            onClick={onClickCopyAddress}
          />
        )}
      </div>
      <CaptionValue className={styles.detail} caption="Web-site">
        {webSite}
      </CaptionValue>
      <CaptionValue className={styles.detail} caption="Version">
        {version}
      </CaptionValue>
    </div>
  )
}

export const ServerDetail = observer(ServerDetailComponent)
