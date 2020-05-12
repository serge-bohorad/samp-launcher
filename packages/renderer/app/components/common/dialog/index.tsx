import React, { FunctionComponent, MouseEvent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useKeyPressEffect } from '@app/hooks/common'

import { Modal } from '../modal'
import { Header } from './header'
import { Footer } from './footer'
import { LoadingBox } from '../loading-box'

import styles from './styles.scss'

export const Dialog: FunctionComponent<Props> = (props) => {
  const {
    className,
    bodyClassName,
    concave,
    closable = true,
    disabled,
    dimming,
    loading,
    caption,
    firstButtonText,
    secondButtonText,
    children,
    onClickClose,
    onClickFirstButton,
    onClickSecondButton
  } = props

  const onClickOnDialog = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  const closeClickHandler = useCallback(() => {
    if (!closable || loading) {
      return
    }

    onClickClose()
  }, [closable, loading, onClickClose])

  useKeyPressEffect(
    ['Enter'],
    () => {
      if (!closable || loading || !onClickFirstButton) {
        return
      }

      onClickFirstButton()
    },
    [closable, loading, onClickFirstButton]
  )

  return (
    <Modal
      className={cn(styles.modal, { [styles.dimming]: dimming })}
      closable={closable && !loading}
      onClose={closeClickHandler}
    >
      <div
        className={cn(styles.container, { [styles.disabled]: disabled || loading }, className)}
        onMouseDown={onClickOnDialog}
      >
        <Header onClickClose={onClickClose}>{caption}</Header>
        <div className={cn(styles.body, { [styles.concave]: concave }, bodyClassName)}>
          {children}
        </div>
        <Footer
          firstButtonText={firstButtonText}
          secondButtonText={secondButtonText}
          onClickFirstButton={onClickFirstButton}
          onClickSecondButton={onClickSecondButton}
        />
        {loading && <LoadingBox />}
      </div>
    </Modal>
  )
}
