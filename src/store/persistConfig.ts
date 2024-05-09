import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root', // Key prefix for persisted state
  storage: AsyncStorage, // Storage engine (AsyncStorage)
  whitelist: ['user'], // Persist only the 'user' slice (optional)
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
