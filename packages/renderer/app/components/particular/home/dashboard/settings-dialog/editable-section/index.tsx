import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { CaptionValue } from '@app/components/common'

import styles from './styles.scss'

import IconEdit from '@app/assets/icons/edit.svg'

export const EditableSection: FunctionComponent<Props> = (props) => {
  const { className, caption, title, children, onClick } = props

  return (
    <div className={cn(styles.container, className)} onClick={onClick}>
      <CaptionValue
        className={styles.captionValue}
        valueClassName={styles.content}
        caption={caption}
        title={title}
      >
        {children}
      </CaptionValue>
      <IconEdit className={styles.icon} />
    </div>
  )
}
