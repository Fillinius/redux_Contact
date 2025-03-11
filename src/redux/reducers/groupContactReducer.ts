import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const groupContactApiSlice = createApi({
  reducerPath: 'groupContact',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getGroupContact: builder.query<Array<GroupContactsDto>, void>({
        query: () => ({ url: '/9b7bc600-9f3b-4c49-b50c-532e79220220' }),
      }),
    }
  },
})

export const { useGetGroupContactQuery } = groupContactApiSlice
