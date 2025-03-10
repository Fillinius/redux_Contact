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
    isLoading(state, action: PayloadAction<GroupContactsDto['id']>) {
      const findGroupContact = state.entitiesGroupContacts.find(
        (group) => group.id === action.payload
      )
      if (findGroupContact) {
        state.isLoading = !state.isLoading
      }
    },
  },
})

export const { isLoading } = groupContactSlice.actions
