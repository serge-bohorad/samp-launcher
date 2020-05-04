import React, { FunctionComponent } from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import { store } from './stores'

import { LayoutMain } from './layouts/main'

import './index.scss'

const App: FunctionComponent = () => {
  return <LayoutMain />
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
