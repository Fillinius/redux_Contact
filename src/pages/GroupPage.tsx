import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { filtredContactByGroupAction } from 'src/redux/actions'
import { useAppDispatch, useAppSelector } from 'src/redux/reducers/hooks'

export const GroupPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)
  const groupContacts = useAppSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )
  const { groupId } = useParams<{ groupId: string }>()
  const dispatch = useAppDispatch()

  const findGroup = groupContacts.find(
    (groupContact) => groupContact.id === groupId
  )
  // console.log('findGroup', findGroup)

  if (findGroup) {
    dispatch(filtredContactByGroupAction(findGroup))
  }
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
})
