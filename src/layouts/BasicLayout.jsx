import React from 'react'
import indexStyle from './index.less'
import { Icon, Layout } from 'antd'
const { Sider, Content } = Layout

function BasicLayout ({global, dispatch, children }){
    return (
      <Layout>
        <div className={indexStyle['basic-header']}>
          ss
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