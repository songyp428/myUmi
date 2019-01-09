import React from 'react'
import { connect } from 'dva'
import {
  Menu,
  Avatar,
  Dropdown
} from 'antd'
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
        user
      }
    } = this.props

    const headerMenu = (
      <Menu>
        <Menu.Item style={{borderBottom: '1px solid #ddd'}}>
          <div>sign in as</div>
          <div>{user.userName || '未登录'}</div>
        </Menu.Item>
        <Menu.Item>
          <a>exit</a>
        </Menu.Item>
      </Menu>
    )
    
    return (
      <div className={headerStyle['wrap']}>
        <div className={headerStyle['left']}>
          <span className={headerStyle['left-title']}>My Umi</span>
        </div>
        <div className={headerStyle['right']}>
          <Dropdown overlay={headerMenu}>
            <div>
              {user && user.avatar
                ? <Avatar src={user.avatar} className={headerStyle['user-logo']} />
                : <Avatar icon="user" className={headerStyle['user-logo']} />
              }
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ global }) => { 
  return { global }
}

export default connect(mapStateToProps)(MyHeader)
