import 'react-hot-loader/patch';
import React, { FunctionComponent, ReactElement } from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader';
import App from './app.tsx'

const render = (Component: FunctionComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App)

if(module.hot){
  module.hot.accept('./app.tsx', () => {
    render(App)
  })
}