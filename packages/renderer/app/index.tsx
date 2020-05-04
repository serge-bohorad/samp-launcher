import React, { FunctionComponent } from 'react'
import { render } from 'react-dom'

import { LayoutMain } from './layouts/main'

import './index.scss'

const App: FunctionComponent = () => {
  return <LayoutMain />
}

render(<App />, document.getElementById('root'))
