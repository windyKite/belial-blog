import React ,{ FunctionComponent } from 'react'
import styles from './index.scss'
import { Button } from 'antd';
import Add from './Add.tsx'

const App: FunctionComponent = () => {
  return (
    <div className={styles.color}>
      <p>Belial's Blog</p> 
      <Button type="primary">antd button</Button> 
      <p>HMR 实现了, 页面没有刷新!</p>
      <Add/>
    </div>
  )
}

export default App