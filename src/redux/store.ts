import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import groupContactReducer, {
  groupContactMiddleware,
  groupContactReducerPath,
} from './groupContacts'
import contactReducer, {
  contactMiddleware,
  contactReducerPath,
  contactSliceReducer,
} from './contacts'

const rootReducer = combineReducers({
  contacts: contactSliceReducer,
  [contactReducerPath]: contactReducer,
  [groupContactReducerPath]: groupContactReducer,
})

//@ts-ignore
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([
      groupContactMiddleware,
      contactMiddleware,
    ])
  },
})

export type RootState = ReturnType<typeof rootReducer>
