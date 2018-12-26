import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

function LoginLayout ({global, dispatch, children }){
  return (
      <Layout>
        <Content>
          { children }
        </Content>
      </Layout>
  )
}

export default LoginLayout