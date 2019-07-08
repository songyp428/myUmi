import { menuKey } from '../utils/menu.js'
export default {
    namespace: 'global',
    state: {
        activeKey: 'func'
    },
    subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('pathname', pathname)
        console.log('menuKey', menuKey)
        console.log('menuKey[pathname]', menuKey[pathname])

        dispatch({
            type: 'updateState',
            payload: {
                activeKey: menuKey[pathname]
            }
        })
      })
    }
  },

  effects: {
    
  },

  reducers: {
    updateState(state, action) {
        return { ...state, ...action.payload }
    }
  }
}
