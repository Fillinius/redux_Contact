import { DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGroupContact {
  entitiesGroupContacts: Array<GroupContactsDto>
  isLoading: boolean
}

const initialGroupContacts: IGroupContact = {
  entitiesGroupContacts: DATA_GROUP_CONTACT,
  isLoading: false,
}

export const groupContactSlice = createSlice({
  name: 'groupContact',
  initialState: initialGroupContacts,
  reducers: {
    findGroupById(state, action: PayloadAction<GroupContactsDto['id']>) {
      console.log('findGroupById')

      state.entitiesGroupContacts.find(({ id }) => id === action.payload)
    },
  },
})

export const { findGroupById } = groupContactSlice.actions
