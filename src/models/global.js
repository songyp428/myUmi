import {
  login
} from '../services/global'
export default {
	namespace: 'global',
	state: {

	},
	subscriptions: {

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