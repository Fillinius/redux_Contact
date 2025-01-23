import { GroupContactsDto } from './../types/dto/GroupContactsDto'
interface IFiltredContact {
  type: string
  payload: string
}
interface IFiltredContactByGroup {
  type: string
  payload: GroupContactsDto
}

export function filtredContactAction(name: string): IFiltredContact {
  return {
    type: 'FILTREDCONTACT',
    payload: name,
  }
}
export function filtredContactByGroupAction(
  group: GroupContactsDto
): IFiltredContactByGroup {
  return {
    type: 'FILTREDCONTACTBYGROUP',
    payload: group,
  }
}

export type ProjectActions = IFiltredContact | IFiltredContactByGroup
