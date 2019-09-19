import { persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from 'your/reducer/path'

// Persistor Configuration to whitelist and blacklist any reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistCombineReducers(persistConfig,reducers);

export default () => {
    const store = createStore(persistedReducer,applyMiddleware(thunk));
    const persistor = persistStore(store);
    return { store, persistor };
};