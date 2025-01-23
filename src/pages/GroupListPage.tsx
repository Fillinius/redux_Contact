import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useAppSelector } from 'src/redux/reducers/hooks'

export const GroupListPage = memo(() => {
  const groupContacts = useAppSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )
  if (!Array.isArray(groupContacts)) return <p>Err data</p>
  return (
    <Row xxl={4}>
      {groupContacts.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
