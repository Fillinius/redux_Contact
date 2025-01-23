import React, { memo } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useSelector } from 'react-redux'

export const GroupListPage = memo(() => {
  const groupContacts = useSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )

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
