import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/reducers/hooks'
import { useGetGroupContactQuery } from 'src/redux/reducers/groupContactReducer'

export const GroupPage = () => {
  const contactsState = useAppSelector(
    (state) => state.contacts.entitiesContacts
  )
  // const groupContacts = useAppSelector(
  //   (state) => state.groupContacts.entitiesGroupContacts
  // )
  const { data: groupContacts } = useGetGroupContactQuery()

  const { groupId } = useParams<{ groupId: string }>()

  const findGroup = groupContacts?.find(
    (groupContact) => groupContact.id === groupId
  )

  const contacts = contactsState.filter(({ id }) =>
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
              {contacts.map((contact) => (
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
