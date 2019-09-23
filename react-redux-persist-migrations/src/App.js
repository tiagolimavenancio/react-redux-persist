import React from 'react'
import styled from 'styled-components'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux'

import store, { persistor } from './store'

import Result from './components/Result'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <LineWrapper>
            <Input />
            <Spacer />
            <Button />
          </LineWrapper>
          <Spacer />
          <Result />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const Spacer = styled.div`
  width: 48px;
  height: 48px;
`;


export default App;
