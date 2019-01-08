import React, { Component } from 'react'
import { connect } from 'dva'
import {Button} from 'antd'
import headerStyle from './header.less'

class MyHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    let {
      dispatch,
      global: {
        
      }
    } = this.props
    
    return (
      <div className={headerStyle['wrap']}>
        <div className={headerStyle['left']}>
          <span className={headerStyle['left-title']}>My Umi</span>
        </div>
        <div className={headerStyle['right']}>
          <div className={headerStyle['exit-logo']}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ global }) => { 
  return { global }
}

export default connect(mapStateToProps)(MyHeader)
