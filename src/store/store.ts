import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';

import { userSlice } from '@/store/Slices/UserSlice';

const storeUserOnlyFilter = createFilter('user', ['user']);
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
  transforms: [storeUserOnlyFilter],
};
const rootReducer = combineReducers({
  user: userSlice.reducer, // Access the reducer property of userSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
