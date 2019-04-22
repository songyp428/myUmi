import React from 'react'
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
          <div>
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
          </div>
        </div>
        <Layout className={indexStyle['basic-content-layout']}>
          <Sider className={indexStyle['basic-sider']}>
            ss
          </Sider>
          <Content className={indexStyle['basic-content']}>
            { children }
          </Content>
        </Layout>
      </Layout>
    )
}

export default BasicLayout