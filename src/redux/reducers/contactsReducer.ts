import { DATA_CONTACT } from 'src/__data__'
import { ContactDto } from 'src/types/dto/ContactDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

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

export const { isLoading } = contactsSlice.actions
