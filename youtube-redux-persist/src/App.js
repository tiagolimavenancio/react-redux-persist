import React from "react";
import { Provider } from "react-redux";

//PERSISTGATE: Este PROVIDER garantirá que a loja seja reidratada 
//antes que a reação possa acessá-la.
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./store";
import TodoList from "./TodoList";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;