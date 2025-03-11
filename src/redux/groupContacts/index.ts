import { groupContactApiSlice } from './api'

const reducer = groupContactApiSlice.reducer
export default reducer

export const { useGetGroupContactQuery } = groupContactApiSlice
export const groupContactReducerPath = groupContactApiSlice.reducerPath
export const groupContactMiddleware = groupContactApiSlice.middleware

export const groupContactReducer = groupContactApiSlice.reducer
