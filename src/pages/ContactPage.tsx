import { FC } from 'react'

import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/redux/reducers/hooks'

export const ContactPage: FC = () => {
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)

  const { contactId } = useParams<{ contactId: string }>()

  const contact = contacts.find(({ id }) => id === contactId)

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
