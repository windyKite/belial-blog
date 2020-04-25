import React, { FunctionComponent } from 'react'
import reactDOM from 'react-dom'
import styles from './index.scss'

const App: FunctionComponent = () => {
  return (
    <div className={styles.color}>Belial's Blog</div>
  )
}

reactDOM.render(<App/>, document.getElementById('app'))