import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { ItemInject } from './item-inject'

import styles from './styles.scss'

export const InjectList: FunctionComponent<Props> = (props) => {
  const { className, extraInject, onClickDeleteItem } = props

  return (
    <div className={cn(styles.container, className)}>
      {extraInject.map((pair) => (
        <ItemInject key={pair.id} pair={pair} onClickDelete={onClickDeleteItem} />
      ))}
    </div>
  )
}
