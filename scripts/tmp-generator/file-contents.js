const index = [
  "import React, { FunctionComponent } from 'react'",
  '\n',
  "import cn from 'classnames'",
  '\n\n',
  "import { Props } from './types'",
  '\n\n',
  "import styles from './styles.scss'",
  '\n\n',
  'export const Component: FunctionComponent<Props> = props => {',
  '\n',
  '  const { className } = props',
  '\n\n',
  '  return <div className={cn(className)}></div>',
  '\n',
  '}',
  '\n'
]

const types = ['export interface Props {', '\n', '  className?: string', '\n', '}', '\n']

module.exports = {
  index: index.join(''),
  types: types.join('')
}
