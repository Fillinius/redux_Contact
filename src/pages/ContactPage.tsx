import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useGetContactQuery } from 'src/redux/contacts'

export const ContactPage: FC = () => {
  const { data: contacts } = useGetContactQuery()
  const { contactId } = useParams<{ contactId: string }>()

  const contact = contacts?.find(({ id }) => id === contactId)
  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
