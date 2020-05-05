import React, {
  FunctionComponent,
  CSSProperties,
  useRef,
  useMemo,
  useState,
  useCallback,
  useEffect
} from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useForceUpdate } from '@app/hooks/common'

import styles from './styles.scss'

export const VirtualList: FunctionComponent<Props> = (props) => {
  const {
    className,
    list,
    elementHeight,
    overscan = 4,
    renderElement,
    onClick,
    onDoubleClick,
    onContextMenu
  } = props

  const rootRef = useRef<HTMLDivElement>(null)
  const itemStyles = useMemo<CSSProperties>(() => ({}), [])

  const [listStyle, setListStyle] = useState<CSSProperties>({ height: 0 })

  const forceUpdate = useForceUpdate()

  const generateDefaultItemStyle = useCallback(
    (index: number): CSSProperties => {
      return {
        position: 'absolute',
        top: elementHeight * index,
        height: elementHeight
      }
    },
    [elementHeight]
  )

  const getCachedItemStyle = useCallback((index: number): CSSProperties | undefined => {
    return itemStyles[index]
  }, [])

  const cacheItemStyle = useCallback((index: number, style: CSSProperties) => {
    itemStyles[index] = style
  }, [])

  const generateElement = useCallback(
    (item: any, index: number): JSX.Element => {
      let style = getCachedItemStyle(index)

      if (!style) {
        style = generateDefaultItemStyle(index)
        cacheItemStyle(index, style)
      }

      return renderElement(item, style, index)
    },
    [renderElement]
  )

  const isItemWithinVisibleRange = useCallback(
    (index: number): boolean => {
      const itemPosition = elementHeight * index
      const scrollPosition = rootRef.current?.scrollTop || 0
      const visibleFrame = rootRef.current?.clientHeight || 0

      return (
        itemPosition > scrollPosition - overscan * elementHeight &&
        itemPosition + elementHeight < scrollPosition + visibleFrame + overscan * elementHeight
      )
    },
    [elementHeight, overscan]
  )

  const onScroll = useCallback(() => {
    forceUpdate()
  }, [])

  useEffect(() => {
    setListStyle({ ...listStyle, height: elementHeight * list.length })
  }, [elementHeight, list.length])

  return (
    <div
      className={cn(styles.container, className)}
      ref={rootRef}
      onScroll={onScroll}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
    >
      <div className={styles.list} style={listStyle} onScroll={onScroll}>
        {list.map((item, index) => isItemWithinVisibleRange(index) && generateElement(item, index))}
      </div>
    </div>
  )
}
