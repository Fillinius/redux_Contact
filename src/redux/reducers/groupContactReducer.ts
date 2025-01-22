const initialGroupContacts = {
  groupContacts: {},
  isLoading: false,
}

export function groupContactReducer(state = initialGroupContacts, action) {
  switch (action.type) {
    case 'LOADINGGROUP':
      return {
        ...state,
        isLoading: true,
      }

    default:
      break
  }
}
