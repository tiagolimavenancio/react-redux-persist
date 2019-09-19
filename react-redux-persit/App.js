import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'

import Counter from './src/screens/Counter'

import { store, persistor } from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  );
}


