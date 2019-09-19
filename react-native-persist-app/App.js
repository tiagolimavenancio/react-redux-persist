import { PersistGate } from 'redux-persist'
import configureStore from './app/store'
import { Provider } from 'react-redux'

const { store, persistor } = configureStore()

//PersistGate: Aqui, PersistGate, segure o aplicativo até carregá-lo 
//completamente, para carregar props, podemos passar qualquer 
//componente do carregador que será exibido até o carregamento.

function Root() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

export default Root