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
    filteredContact(state, action?: PayloadAction<ContactDto['name']>) {
      if (!action) return state

      state.entitiesContacts = state.entitiesContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(action.payload) > -1
      )
    },
    filtredContactByGroup(state, action?: PayloadAction<GroupContactsDto>) {
      if (!action) return state

      state.entitiesContacts = state.entitiesContacts.filter(({ id }) =>
        JSON.stringify(action.payload.contactIds).includes(id)
      )
    },
  },
})

export const { filteredContact, filtredContactByGroup } = contactsSlice.actions
