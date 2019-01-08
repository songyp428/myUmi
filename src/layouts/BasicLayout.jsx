import React from 'react'
import indexStyle from './index.less'
import MyHeader from '../components/header/header.jsx'
import MyMenu from '../components/sider/sider.jsx'
import { Icon, Layout } from 'antd'
const { Sider, Content } = Layout

function BasicLayout ({global, dispatch, children }){
    return (
      <Layout>
        <div className={indexStyle['basic-header']}>
          <MyHeader />
        </div>
        <Layout className={indexStyle['basic-content-layout']}>
          <Sider className={indexStyle['basic-sider']}>
            <MyMenu />
          </Sider>
          <Content className={indexStyle['basic-content']}>
            { children }
          </Content>
        </Layout>
      </Layout>
    )
}

export default BasicLayout