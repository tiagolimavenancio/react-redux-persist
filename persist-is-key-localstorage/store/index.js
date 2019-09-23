import { compose, createStore, applyMiddleware } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'

import reducers from './reducers'

let store = compose(
    // If you are using any other middleware, applyMiddleware here
    autoRehydrate()
)(createStore)(reducers)

persistStore(store)

export default store