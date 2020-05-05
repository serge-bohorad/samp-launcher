import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'

import styles from './styles.scss'

export const ServerDescription: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server description" />
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque recusandae tenetur
        illum tempore ducimus cupiditate nostrum deserunt. Harum, consequatur non?
      </div>
    </div>
  )
}
