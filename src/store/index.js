import {createStore, applyMiddleware, compose } from 'redux'
import {middlewares as mw} from 'configs'
import rootReducer from 'reducers'
console.log(mw);

const createStoreWithMiddlewares = compose(applyMiddleware(...mw))(createStore),
		store = createStoreWithMiddlewares(rootReducer)

export default store
