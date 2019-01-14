import { connect } from 'dva'
import Link from 'umi/link'

import dynamicFormStyle from './dynamicForm.less'

import {
  Card,
  Form,
  Radio,
  Input,
  Button,
  Select,
  Upload,
  message,
  Breadcrumb

} from 'antd'

const Option = Select.Option
const FormItem = Form.Item
const FormCreate = Form.create
const RadioGroup = Radio.Group
const BreadcrumbItem = Breadcrumb.Item

const Dynamic = ({
  form: {
    validateFields,
    getFieldsValue,
    setFieldsValue,
    getFieldDecorator
  },
  dispatch,
  location,
  dynamicForm: {
    educationLevelList,
    familyMemberNumberList,
    familyMemberNumberLength
  }
}) => {
  console.log(familyMemberNumberList,familyMemberNumberLength)
  const { query } = location
  const isEdit = query && query.type === 'edit' ? true : false

  const fromItemLayout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 10
    }
  }

  const handleAddFamilyMember = (e) => {
    console.log('handle add family members!')
    let tmp = familyMemberNumberLength + 1
    familyMemberNumberList.push(tmp)

    dispatch({
      type: 'dynamicForm/updateState',
      payload: {
        familyMemberNumberList,
        familyMemberNumberLength: tmp
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateFields((err,values) => {
      if (!err) {
        console.log(values)
      } else {
        message.error('操作失败~')
        console.log('err:',err)
      }
    })
  }

  return (
    <Card>
      <Breadcrumb style={{marginBottom: '20px'}}>
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>动态表单</BreadcrumbItem>
        <BreadcrumbItem><Link to="/dynamicForm/list">列表</Link></BreadcrumbItem>
        <BreadcrumbItem>{isEdit ? '编辑' : '新建'}</BreadcrumbItem>
      </Breadcrumb>
      <Form onSubmit={handleSubmit}>
        <FormItem label="姓名" {...fromItemLayout}>
          {getFieldDecorator('name',{
            initialValue: ''
          })(
            <Input size="default" />
          )}
        </FormItem>
        <FormItem label="性别" {...fromItemLayout}>
          {getFieldDecorator('sex',{
            initialValue: 'male'
          })(
            <RadioGroup>
              <Radio value="male" key="male">男</Radio>
              <Radio value="female" key="female">女</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="学历" {...fromItemLayout}>
          {getFieldDecorator('educationLevel')(
            <Select
              size="default"
              allowClear
              showSearch
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {educationLevelList && educationLevelList.length && educationLevelList.map((item) => {
                return <Option value={item.id} key={item.id}>{item.name}</Option>
              })}
            </Select>
          )}
        </FormItem>
      </Form>
      <Card size="small" title="家庭成员信息" extra={<Button size="small" onClick={handleAddFamilyMember}>添加</Button>} style={{width: '60%',marginLeft: '25%'}}>
        {familyMemberNumberList.map((item,index) => {
          const handleRemoveFamilyMember = (e) => {
            e.preventDefault()

            familyMemberNumberList.splice(index,1)

            dispatch({
              type: 'dynamicForm/updateState',
              payload: {
                familyMemberNumberList
              }
            })
          }

          return (
            <div className={dynamicFormStyle['members-box']} key={item}>
              <div className={dynamicFormStyle['members-title']}>
                <span>{`成员${index+1}`}</span>
                <Button size="small" onClick={handleRemoveFamilyMember} className={dynamicFormStyle['rm-bn']}>移除</Button>
              </div>
              
              <FormItem label="姓名" {...fromItemLayout}>
                {getFieldDecorator(`name${item}`,{
                  initialValue: ''
                })(
                  <Input size="default" />
                )}
              </FormItem>
              <FormItem label="性别" {...fromItemLayout}>
                {getFieldDecorator(`sex${item}`,{
                  initialValue: 'male'
                })(
                  <RadioGroup>
                    <Radio value="male" key="male">男</Radio>
                    <Radio value="female" key="female">女</Radio>
                  </RadioGroup>
                )}
              </FormItem>
            </div>
          )
        })

        }
      </Card>
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

export default connect(mapStateToProps)(FormCreate()(Dynamic))