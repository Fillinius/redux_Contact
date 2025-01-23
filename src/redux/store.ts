import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import { contactsReducer } from './reducers/contactsReducer'
import { groupContactReducer } from './reducers/groupContactReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactReducer,
})

//@ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
