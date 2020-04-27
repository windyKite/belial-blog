import React, { FunctionComponent } from 'react'
import reactDOM from 'react-dom'
import styles from './index.scss'
import { Button } from 'antd';

const App: FunctionComponent = () => {
  return (
    <div className={styles.color}>
      <p>Belial's Blog</p> 
      <Button type="primary">antd button</Button> 
    </div>
  )
}

reactDOM.render(<App/>, document.getElementById('app'))