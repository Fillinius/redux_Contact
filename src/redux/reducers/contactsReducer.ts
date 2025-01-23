import { DATA_CONTACT } from 'src/__data__'
import { ProjectActions } from '../actions'
import { ContactDto } from 'src/types/dto/ContactDto'

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

export function contactsReducer(
  state = initialStateContacts,
  action: ProjectActions
) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      }

    case 'FILTREDCONTACT':
      return {
        ...state,
        entitiesContacts: state.entitiesContacts.filter(
          ({ name }) => name.toLowerCase().indexOf(action.payload) > -1
        ),
      }

    case 'FILTREDCONTACTBYGROUP':
      if (action.payload) {
        console.log(state, action.payload)
        //don't work
        // return {
        //   ...state,
        //   entitiesContacts: state.entitiesContacts.filter(({ id }) =>
        //     action.payload.contactIds.includes(id)
        //   ),
        // }
      }
      return state

    default:
      return state
  }
}
