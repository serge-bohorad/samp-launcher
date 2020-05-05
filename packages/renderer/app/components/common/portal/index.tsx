import { FunctionComponent, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Portal: FunctionComponent = (props) => {
  const { children } = props

  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.appendChild(element)

    return (): any => document.body.removeChild(element) as any
  }, [])

  return createPortal(children, element)
}
