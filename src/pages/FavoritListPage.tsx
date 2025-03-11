import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useGetContactQuery } from 'src/redux/contacts'
import { useAppSelector } from 'src/redux/hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector(
    (state) => state.contacts.favoriteContacts
  )
  const { data: contacts } = useGetContactQuery()

  const filteredContacts = contacts?.filter(({ id }) =>
    favoriteContacts.includes(id)
  )
  return (
    <Row xxl={4} className="g-4">
      {filteredContacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
