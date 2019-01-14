import menu_key from '../utils/menu'
import {
  login
} from '../services/global'

export default {
  namespace: 'global',
  state: {
    user: {},
    activeKey: '1'
  },
  subscriptions: {
    setup({dispatch, history}){
      history.listen(({pathname, query}) => {
        dispatch({
          type: 'updateState',
          payload: {
            activeKey: menu_key[pathname]
          }
        })
      })
    }
  },
  effects: {
    *login({ payload = {}}, { call, put}) {

    }
  },
  reducers: {
    updateState(state, action) {
      return {...state, ...action.payload}
    }
  }
}