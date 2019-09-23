import { createStore, compose, applyMiddleware } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist-immutable'
import createFilter from '@actra-development-oss/redux-persist-transform-filter-immutable'

import { fromJS } from 'immutable'
import defaultState from ''

const myFilter = createFilter('auth', ['userToken'])

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
    storage: AsyncStorage,
    whitelist: ['auth'],
    transforms: [myFilter]
})

const store = configureStore()