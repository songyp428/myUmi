import BasicLayout from './BasicLayout'
import LoginLayout from './LoginLayout'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

export default (props) => {
    return (
      <LocaleProvider locale={zhCN}>
        {props.location.pathname === '/login'
          ?   <LoginLayout>{ props.children }</LoginLayout>
          :   <BasicLayout>{ props.children }</BasicLayout>
        }
      </LocaleProvider>
  )
}
