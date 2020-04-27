import React, { FunctionComponent, useState } from 'react'
import { Button } from 'antd'

const Add: FunctionComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={()=>{ setCount(count + 1) }}>+1</Button>
      {count}
    </div>
  )
}

export default Add