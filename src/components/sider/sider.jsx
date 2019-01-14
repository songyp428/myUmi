import Link from 'umi/link'
import { connect } from 'dva'
import React, { Component } from 'react'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu

class MyMenu extends React.Component {
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
        activeKey
      }
    } = this.props

    return (
      <Menu
      defaultSelectedKeys={[activeKey]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
    >
      <SubMenu
        key="sub1"
        title="动态表单"
      >
        <Menu.Item key="1"><Link to="/dynamicForm/list">列表</Link></Menu.Item>
      </SubMenu>
    </Menu>
    )
  }
}

const mapStateToProps = ({ global }) => { 
  return { global }
}

export default connect(mapStateToProps)(MyMenu)
