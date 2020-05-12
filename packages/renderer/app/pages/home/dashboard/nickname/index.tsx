/* eslint-disable no-unused-expressions */
import React, { FunctionComponent, useRef, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { onSaveCommonNickname } from '@app/services/settings'
import { onSaveServerNickname } from '@app/services/server'

import { useInputCallback, useSelector } from '@app/hooks/common'

import { IconInput, IconButton } from '@app/components/common'
import { SwitchNicknameNotification } from './switch-nickname-notification'

import styles from './styles.scss'

import IconNickname from '@app/assets/icons/user.svg'
import IconSwitch from '@app/assets/icons/switch.svg'

const NicknameComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    misc: { usingCommonNickname, setUsingCommonNickname },
    server: { selectedServer, setServerNickname },
    settings: { commonNickname, autoSwitchNickname, setCommonNickname },
    misc: { addNotification }
  } = useSelector((store) => store)

  const inputRef = useRef<HTMLInputElement>(null)

  const onClickSwitchNickname = useCallback(() => {
    // Don't switch if selected server doesn't exists
    if (!selectedServer && usingCommonNickname) {
      return addNotification({ type: 'error', content: 'No one server selected' })
    }

    setUsingCommonNickname(!usingCommonNickname)

    addNotification(
      {
        type: 'info',
        content: <SwitchNicknameNotification />
      },
      10000
    )

    inputRef.current?.focus()
  }, [selectedServer, usingCommonNickname])

  const onChangeNickname = useInputCallback(
    ({ value }) => {
      if (usingCommonNickname) {
        return setCommonNickname(value)
      }

      setServerNickname(selectedServer!, value)
    },
    [selectedServer, usingCommonNickname]
  )

  const onBlurNickname = useInputCallback(
    ({ value }) => {
      if (usingCommonNickname) {
        return onSaveCommonNickname(value)
      }

      onSaveServerNickname(value)
    },
    [usingCommonNickname, selectedServer]
  )

  useEffect(() => {
    if (autoSwitchNickname && selectedServer?.nickname) {
      return setUsingCommonNickname(false)
    }

    setUsingCommonNickname(true)
  }, [autoSwitchNickname, selectedServer])

  const buttonSwitchTitle = usingCommonNickname ? 'Nickname - Common' : 'Nickname - Selected server'
  const nickname = usingCommonNickname ? commonNickname : selectedServer?.nickname || ''

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={cn(styles.buttonSwitch, {
          [styles.buttonSwitchActive]: !usingCommonNickname
        })}
        title={buttonSwitchTitle}
        icon={IconSwitch}
        onClick={onClickSwitchNickname}
      />
      <IconInput
        ref={inputRef}
        className={styles.input}
        placeholder="Nickname"
        icon={IconNickname}
        value={nickname}
        onChange={onChangeNickname}
        onBlur={onBlurNickname}
      />
    </div>
  )
}

export const Nickname = observer(NicknameComponent)
