import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'
import { CaptionValue, IconButton, Link } from '@app/components/common'

import styles from './styles.scss'

import IconCopyAddress from '@app/assets/icons/copy.svg'

const ServerDetailComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { selectedServer } = useSelector(({ server }) => server)

  const { host, port, weburl, version = '-' } = selectedServer || {}

  const onClickCopyAddress = useCallback(() => {
    //
  }, [])

  const address = host ? `${host}:${port}` : '-'
  const webSite = weburl ? <Link text={weburl} /> : '-'

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
