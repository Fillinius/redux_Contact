import React, { memo, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { filtredContactAction } from 'src/redux/actions'
import { useAppDispatch, useAppSelector } from 'src/redux/reducers/hooks'

export const ContactListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)
  const groupContacts = useAppSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )
  const dispatch = useAppDispatch()
  console.log(groupContacts)

  // const [contacts, setContacts] = useState<ContactDto[]>(contactsState)
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    // let findContacts: ContactDto[] = contactsState

    if (fv.name) {
      const fvName = fv.name.toLowerCase()

      // findContacts = findContacts.filter(
      //   ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      // )
      dispatch(filtredContactAction(fvName))
    }

    if (fv.groupId) {
      if (!groupContacts) return 'Err data'
      const groupContact = groupContacts.find(({ id }) => id === fv.groupId)

      if (groupContact) {
        // findContacts = findContacts.filter(({ id }) =>
        //   groupContacts.contactIds.includes(id)
        // )
        contacts.filter((contact) =>
          groupContacts.contactIds.includes(contact.id)
        )
      }
    }

    // setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContacts}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
