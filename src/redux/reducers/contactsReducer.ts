const initialStateContacts = {
  contacts: {},
  filtredContacts: {},
  favoriteContacts: [],
  isLoading: false,
}

export function contactsReducer(state = initialStateContacts, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      }

    default:
      return state
  }
}
