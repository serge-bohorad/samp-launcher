import { CSSProperties, MouseEvent } from 'react'

export interface Props {
  className?: string
  list: any[]
  elementHeight: number
  overscan?: number
  renderElement: (item: any, style: CSSProperties, index: number) => JSX.Element
  onClick?: (e: MouseEvent) => any
  onDoubleClick?: (e: MouseEvent) => any
  onContextMenu?: (e: MouseEvent) => any
}
