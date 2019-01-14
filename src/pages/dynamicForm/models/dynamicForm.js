
export default {
  namespace: 'dynamicForm',
  state: {
    loading: false,
    educationLevelList: [
      {id: 1,name: '小学'},
      {id: 2,name: '初中'},
      {id: 3,name: '高中'},
      {id: 4,name: '中专'},
      {id: 5,name: '大专'},
      {id: 6,name: '本科'},
      {id: 7,name: '硕士'},
      {id: 8,name: '博士'},
      {id: 9,name: '博士后'}
    ],
    familyMemberNumberList: [],
    familyMemberNumberLength: 0
  },
  subscriptions: {

  },
  effects: {

  },
  reducers: {
    updateState(state, action) {
      return {...state, ...action.payload}
    }
  }
}