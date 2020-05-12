import React, { FunctionComponent, MouseEvent, useRef, useCallback, useEffect } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Modal } from '../modal'

import styles from './styles.scss'

export const ContextMenu: FunctionComponent<Props> = (props) => {
  const menuRef = useRef<HTMLDivElement>(null)

  const onClickMenu = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  useEffect(() => {
    const element = menuRef.current!

    const { cursorPosX, cursorPosY } = window

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const menuWidth = element.offsetWidth
    const menuHeight = element.offsetHeight

    const right = windowWidth - cursorPosX > menuWidth
    const left = !right
    const top = windowHeight - cursorPosY > menuHeight
    const bottom = !top

    if (right) {
      element.style.left = `${cursorPosX}px`
    }

    if (left) {
      element.style.left = `${cursorPosX - menuWidth}px`
    }

    if (top) {
      element.style.top = `${cursorPosY}px`
    }

    if (bottom) {
      element.style.top = `${cursorPosY - menuHeight}px`
    }
  }, [])

  const { className, children, onClose } = props

  return (
    <Modal onClose={onClose}>
      <div
        className={cn(styles.container, className)}
        ref={menuRef}
        onMouseDown={onClickMenu}
        onClick={onClose}
      >
        {children}
      </div>
    </Modal>
  )
}
