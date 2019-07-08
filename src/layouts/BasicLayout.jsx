import React from 'react'
import Link from 'umi/link'
import { connect } from 'dva'
import indexStyle from './index.less'
import { Menu, Layout } from 'antd'
const { Sider, Content } = Layout
const { SubMenu } = Menu

function BasicLayout ({ global: { activeKey }, children }){
  console.log(activeKey)
    return (
      <Layout>
        <div className={indexStyle['basic-header']}>
          {/*<div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['home']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">个人主页</Menu.Item>
              <Menu.Item key="weibo">微博</Menu.Item>
              <Menu.Item key="blog">博客</Menu.Item>
            </Menu>
            </div>
            <div className={indexStyle['right']} onClick={handleInfoClick}>
              <span className={indexStyle['logo']}></span>
              <span className={indexStyle['drop']}></span>
            </div>*/}
          <ul className={indexStyle['header-nav']}>
            <li>组件库</li>
            <li className={indexStyle['header-login']}>
              <span className={indexStyle['logo']}></span>
              <span className={indexStyle['drop']}></span>
            </li>
          </ul>
        </div>
        <Layout className={indexStyle['basic-content-layout']}>
          <Sider className={indexStyle['basic-sider']}>
            <Menu
              defaultSelectedKeys={[activeKey]}
              selectedKeys={[activeKey]}
              theme="light"
              mode="inline"
            >
              <Menu.Item key="func"><Link to="/test">函数组件</Link></Menu.Item>
              <SubMenu key="cascader" title="级联组件">
                <Menu.Item key="cascader/multi"><Link to="/cascader/multi">多选</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className={indexStyle['basic-content']}>
            { children }
          </Content>
        </Layout>
      </Layout>
    )
}

const mapStateToProps = ({
  global
}) => {
  return {
    global
  }
}

export default connect(mapStateToProps)(BasicLayout)
