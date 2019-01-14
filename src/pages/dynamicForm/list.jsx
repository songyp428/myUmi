import { connect } from 'dva'
import Link from 'umi/link'
import {
  Card,
  Button,
  Breadcrumb
} from 'antd'

const BreabCrumbItem = Breadcrumb.Item

const DynamicFormList = ({
  dynamicForm: {
    loading
  }
}) => {
  console.log('loading---', loading)
  return (
    <Card>
      <Breadcrumb style={{marginBottom: '20px'}}>
        <BreabCrumbItem>首页</BreabCrumbItem>
        <BreabCrumbItem>动态表单</BreabCrumbItem>
        <BreabCrumbItem>列表</BreabCrumbItem>
      </Breadcrumb>

      <Button size="small" type="primary"><Link to="/dynamicForm/info?type=add">新建</Link></Button>
      <Button size="small" type="primary"><Link to={`/dynamicForm/info?type=edit&id=1`}>编辑</Link></Button>
    </Card>
  )
}

const mapStateToProps = ({
  dynamicForm
}) => {
  return {
    dynamicForm
  }
}

export default connect(mapStateToProps)(DynamicFormList)