import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/redux/reducers/hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector(
    (state) => state.contacts.favoriteContacts
  )
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)

  // const [contacts, setContacts] = useState<ContactDto[]>([])
  // useEffect(() => {
  //   setContacts(() =>
  //     contactsState.filter(({ id }) => favoriteContactsState.includes(id))
  //   )
  // }, [contactsState, favoriteContactsState])
  const filteredContacts = contacts.filter(({ id }) =>
    favoriteContacts.includes(id)
  )

  return (
    <Row xxl={4} className="g-4">
      {filteredContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
