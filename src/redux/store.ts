import { combineReducers } from 'redux'
import { contactApiSlice, contactsSlice } from './reducers/contactsReducer'
import { groupContactApiSlice } from './reducers/groupContactReducer'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  [contactApiSlice.reducerPath]: contactApiSlice.reducer,
  [groupContactApiSlice.reducerPath]: groupContactApiSlice.reducer,
})

//@ts-ignore
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([
      groupContactApiSlice.middleware,
      contactApiSlice.middleware,
    ])
  },
})

export type RootState = ReturnType<typeof rootReducer>
