import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'
import { CaptionValue, IconButton, Link } from '@app/components/common'

import styles from './styles.scss'

import IconCopyAddress from '@app/assets/icons/copy.svg'

export const ServerDetail: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickCopyAddress = useCallback(() => {
    //
  }, [])

  const onClickOpenWebsite = useCallback(() => {
    //
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server information" />
      <div className={styles.addressWrapper}>
        <CaptionValue className={cn(styles.detail, styles.address)} caption="Address">
          192.168.100.100:777
        </CaptionValue>
        <IconButton
          className={styles.buttonCopyAddress}
          icon={IconCopyAddress}
          onClick={onClickCopyAddress}
        />
      </div>
      <CaptionValue className={styles.detail} caption="Web-site">
        <Link text="server-web-site.com" onClick={onClickOpenWebsite} />
      </CaptionValue>
      <CaptionValue className={styles.detail} caption="Version">
        0.3.7-R2
      </CaptionValue>
    </div>
  )
}
