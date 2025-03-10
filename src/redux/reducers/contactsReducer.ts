import { DATA_CONTACT } from 'src/__data__'
import { ContactDto } from 'src/types/dto/ContactDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IContactState {
  entitiesContacts: Array<ContactDto>
  favoriteContacts: Array<ContactDto['id']>
  isLoading: boolean
}

const initialStateContacts: IContactState = {
  entitiesContacts: DATA_CONTACT,
  favoriteContacts: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
  isLoading: false,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    isLoading(state, action?: PayloadAction<ContactDto['id']>) {
      const contactById = state.entitiesContacts.find(
        (contact) => contact.id === action?.payload
      )
      if (contactById) {
        state.isLoading = !state.isLoading
      }
    },
  },
})

export const contactApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getContact: builder.query<Array<ContactDto>, void>({
        query: () => ({
          url: '/9b7bc600-9f3b-4c49-b50c-532e79220220',
        }),
      }),
    }
  },
})

export const { useGetContactQuery } = contactApiSlice
