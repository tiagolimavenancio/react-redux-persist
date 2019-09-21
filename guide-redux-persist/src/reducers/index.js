
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { SetTransform } from './Transform'
import { authReducer, navReducer, notesReducer } from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['auth', 'notes']
// };

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation'],
  transforms: [SetTransform]
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['isLoggingIn']
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  navigation: navReducer,
  notes: notesReducer
});

export default persistReducer(rootPersistConfig, rootReducer);