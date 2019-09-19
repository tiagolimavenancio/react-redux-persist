import { createStore } from "redux";
//PersistStore: será usado na loja, 
//depois de criado, e definirá que a loja usará o Redux-Persist

import { persistStore, persistReducer } from 'redux-persist'

//PersistReducer: será usado em nosso rootReducer para defini-lo como algo que 
//queremos persistir. É possível entrar no rootReducer e usar 
//persistReducer em alguns e deixar outros sem persistência

import storage from 'redux-persist/lib/storage'

import rootReducer from "./reducers";

//KEY:  esse valor definirá qual será a chave que usaremos como 
//identificador para salvar as informações persistentes. 
//Uma vez criado, deve ser o mesmo sempre.
const persistConfig = {
    key: 'root',
    storage, // or storage: AsyncStorage
    whitelist: ['auth'], // save reducers
    blacklist: ['todos'] // don´t save reducers
}

//BLACKLIST: lista de nomes de reducers que serão 
//ignorados quando a persistência for concluída

//WHITELIST: lista de nomes de reducers que serão usados quando a 
//persistência for concluída. Outros redutores serão ignorados

//TRANSFORMS: personaliza a maneira como persistimos e reidratamos os dados

//STATERECONCILER: o modo como as informações serão mescladas quando forem reidratadas.

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export default { store, persistor };
