import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconBrowseDll from '@app/assets/icons/dll-file.svg'
import IconBrowseFolder from '@app/assets/icons/folder.svg'
import IconClear from '@app/assets/icons/rubbish.svg'

export const ControlBox: FunctionComponent<Props> = (props) => {
  const { className, onClickBrowseFiles, onClickBrowseFolders, onClickClear } = props

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={styles.button}
        title="Browse plugins"
        icon={IconBrowseDll}
        onClick={onClickBrowseFiles}
      />
      <IconButton
        className={styles.button}
        title="Browse folders"
        icon={IconBrowseFolder}
        onClick={onClickBrowseFolders}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        title="Clear"
        icon={IconClear}
        onClick={onClickClear}
      />
    </div>
  )
}
