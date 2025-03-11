import { contactApiSlice } from './api'
import { contactsSlice } from './slice'

const reducer = contactApiSlice.reducer
export default reducer

export const { useGetContactQuery } = contactApiSlice

export const contactReducerPath = contactApiSlice.reducerPath
export const contactMiddleware = contactApiSlice.middleware

export const contactSliceReducer = contactsSlice.reducer

export const { isLoading } = contactsSlice.actions
