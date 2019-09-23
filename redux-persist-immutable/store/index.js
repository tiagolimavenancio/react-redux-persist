import { createStore, componse, applyMiddleware } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist-immutable'

import { fromJS } from 'immutable'
import defaultState from ''

export function configureStore(initialState=fromJS(defaultState)) {
    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancer

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(
            applyMiddleware(sagaMiddleware),
            autoRehydrate()
        )
    )
    sagaMiddleware.run(rootSaga)
    return store
}

const persistor = persistStore(store, {
    storage: AsyncStorage
})

const store = configureStore()