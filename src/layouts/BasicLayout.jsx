import React from 'react'
import Link from 'umi/link'
import indexStyle from './index.less'
import { Menu, Icon, Layout } from 'antd'
const { Sider, Content } = Layout

function BasicLayout ({global, dispatch, children }){
    const handleInfoClick = () => {
      console.log('info click')
    }
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
            <Menu defaultSelectedKeys={['func']}>
              <Menu.Item key="test"><Link to="test">函数组件</Link></Menu.Item>
              <Menu.Item key="cascader"><Link to="cascader">级联组件</Link></Menu.Item>
            </Menu>
          </Sider>
          <Content className={indexStyle['basic-content']}>
            { children }
          </Content>
        </Layout>
      </Layout>
    )
}

export default BasicLayout