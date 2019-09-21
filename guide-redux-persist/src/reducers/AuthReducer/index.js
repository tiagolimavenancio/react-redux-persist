// AuthReducer.js
import storage from 'redux-persist/lib/storage';
import { persistReducer, REHYDRATE } from 'redux-persist';

const INITIAL_STATE = {
  currentUser: null,
  isLoggingIn: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REHYDRATE:
        return { ...state, currentUser: action.payload.currentUser }
    default:
      return state
  }
};

export default persistReducer(AuthReducer);