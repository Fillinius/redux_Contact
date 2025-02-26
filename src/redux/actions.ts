import { GroupContactsDto } from './../types/dto/GroupContactsDto'
interface IFiltredContact {
  type: string
  payload: string
}
interface IFiltredContactByGroup {
  type: string
  payload: GroupContactsDto
}

interface IFindGroupById {
  type: string
  payload: string
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

export function findGroupByIdAction(id: string): IFindGroupById {
  return {
    type: 'FINDGROUPBYID',
    payload: id,
  }
}

export type ProjectActions =
  | IFiltredContact
  | IFiltredContactByGroup
  | IFindGroupById
