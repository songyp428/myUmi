import React, { Component } from 'react'
import { connect } from 'dva'
import {Button} from 'antd'

class MyHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    let {
      dispatch,
      global: {
        
      }
    } = this.props

    const handleChangeCount = () => {
      dispatch({
        type: 'test/updateState'
      })
    }

    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = ({ global }) => { 
  return { global }
}

export default connect(mapStateToProps)(MyHeader)
