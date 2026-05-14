// import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import userSlice from "./userSlice"

// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'ai-website-builder',
//     version: 1,
//     storage,
//   }
//   const rootReducer = combineReducers({
//     user:userSlice,
//   })
//   const persistedReducer = persistReducer(persistConfig, rootReducer)


// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
// });
// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import {
  persistReducer,
  persistStore,   // ✅ add this
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}

const persistConfig = {
  key: 'ai-website-builder',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)  // ✅ add this
export default store;