import React, { FunctionComponent, useState, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { showSystemDialog } from '@app/services/misc'

import { Dialog } from '../../../../common'
import { ControlBox } from './control-box'
import { InjectList } from './inject-list'

import styles from './styles.scss'

export const ManageExtraInjectDialog: FunctionComponent<Props> = (props) => {
  const { className, initialExtraInject, onClickClose, onClickSave } = props

  const [extraInject, setExtraInject] = useState(initialExtraInject)
  const [disabled, setDisabled] = useState(false)

  const onClickBrowseFiles = useCallback(async () => {
    setDisabled(true)

    const newPaths = await showSystemDialog('openFile', {
      filters: [{ name: 'Plugins', extensions: ['asi', 'dll'] }]
    })

    if (newPaths) {
      setExtraInject([...extraInject, ...Pair.from(newPaths)])
    }

    setDisabled(false)
  }, [extraInject])

  const onClickBrowseFolders = useCallback(async () => {
    setDisabled(true)

    const newPaths = await showSystemDialog('openDirectory')

    if (newPaths) {
      setExtraInject([...extraInject, ...Pair.from(newPaths)])
    }

    setDisabled(false)
  }, [extraInject])

  const onClickClear = useCallback(() => {
    if (!extraInject.length) {
      return
    }

    setExtraInject([])
  }, [extraInject])

  const onClickDeleteItem = useCallback(
    (pair: Pair<string>) => {
      setExtraInject(Pair.delete(extraInject, pair))
    },
    [extraInject]
  )

  const saveClickHandler = useCallback(() => {
    onClickSave(extraInject)
  }, [extraInject, onClickSave])

  return (
    <Dialog
      {...props}
      className={cn(styles.container, className)}
      concave={true}
      closable={!disabled}
      disabled={disabled}
      firstButtonText="Save"
      onClickClose={onClickClose}
      onClickFirstButton={saveClickHandler}
      onClickSecondButton={onClickClose}
    >
      <ControlBox
        onClickBrowseFiles={onClickBrowseFiles}
        onClickBrowseFolders={onClickBrowseFolders}
        onClickClear={onClickClear}
      />
      <InjectList
        className={styles.injectList}
        extraInject={extraInject}
        onClickDeleteItem={onClickDeleteItem}
      />
    </Dialog>
  )
}
