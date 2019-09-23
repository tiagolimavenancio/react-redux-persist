import { createStore, combineReducers } from "redux";
import { persistStore, createMigrate } from "redux-persist";

import { numberReducer, messageReducer } from "../reducers";
import { migrations } from "../reducers/number";
import { persist } from "../services/reduxPersist";

const MIGRATION_DEBUG = false;

const numberPersistConfig = {
  key: "persistedStore",
  version: 1,
  migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG })
};

const reducers = combineReducers({
  persistedStore: persist(numberPersistConfig, numberReducer),
  notPersistedStore: messageReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;