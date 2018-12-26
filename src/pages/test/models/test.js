import { message as Message } from 'antd'
import pathToRegexp from 'path-to-regexp'

export default {
  namespace: 'test',
  state: {
    count: 1
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
      	if (pathToRegexp('/testDynamic').test(pathname)) {
          console.log('testDynamic list page')
          dispatch({
          	type: 'updateState',
          	payload: {
          		count: 1
          	}
          })
      	}
      })
    }
  },

  effects: {
    * query ({ payload = {} }, { call, put }) {
      const data = yield call()

      if (data) {
        console.log(data)
      } else {

        Message.error('请求出错，请重试！')
      }
    }
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
