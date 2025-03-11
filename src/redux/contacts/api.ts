import { ContactDto } from 'src/types/dto/ContactDto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getContact: builder.query<Array<ContactDto>, void>({
        query: () => ({
          url: '/4d7fd30a-ae7c-4ad4-89c4-fad7661ade8b',
        }),
      }),
    }
  },
})
