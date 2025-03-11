import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useGetGroupContactQuery } from 'src/redux/groupContacts'
import { useGetContactQuery } from 'src/redux/contacts'

export const GroupPage = () => {
  const { currentData: contactsState } = useGetContactQuery()
  const { data: groupContacts } = useGetGroupContactQuery()

  const { groupId } = useParams<{ groupId: string }>()

  const findGroup = groupContacts?.find(
    (groupContact) => groupContact.id === groupId
  )

  const contacts = contactsState?.filter(({ id }) =>
    JSON.stringify(findGroup?.contactIds).includes(id)
  )

  return (
    <Row className="g-4">
      {findGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={findGroup} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
}
