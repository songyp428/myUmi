import React from 'react'
import { Button } from 'antd'

function Hello(props) {
  console.log('props', props)

  function handleClick() {
    props.onClick('')
  }
  return (
    <div>
      <p>hello function component</p>
      <p>{props.type}</p>
      <Button onClick={handleClick}>click</Button>
    </div>
  )
}

export default Hello