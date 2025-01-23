import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/reducers/hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector(
    (state) => state.contacts.favoriteContacts
  )
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)

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
