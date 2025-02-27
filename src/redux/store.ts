import { combineReducers } from 'redux'
import { contactsSlice } from './reducers/contactsReducer'
import { groupContactSlice } from './reducers/groupContactReducer'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  groupContacts: groupContactSlice.reducer,
})

//@ts-ignore
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof rootReducer>
