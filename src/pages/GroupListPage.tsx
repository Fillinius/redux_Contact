import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroupContactQuery } from 'src/redux/groupContacts'

export const GroupListPage = memo(() => {
  // const groupContacts = useAppSelector(
  //   (state) => state.groupContacts.entitiesGroupContacts
  // )
  const { data: groupContacts } = useGetGroupContactQuery()

  return (
    <Row xxl={4}>
      {groupContacts?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
