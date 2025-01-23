import { DATA_GROUP_CONTACT } from 'src/__data__'
import { ProjectActions } from '../actions'

const initialGroupContacts = {
  entitiesGroupContacts: DATA_GROUP_CONTACT,
  isLoading: false,
}

export function groupContactReducer(
  state = initialGroupContacts,
  action: ProjectActions
) {
  switch (action.type) {
    case 'LOADINGGROUP':
      return {
        ...state,
        isLoading: true,
      }
    case 'FINDGROUPBYID':
      return {
        ...state,
        entitiesGroupContacts: state.entitiesGroupContacts.find(
          ({ id }) => id === action.payload
        ),
      }

    default:
      return state
  }
}
