import React, { memo, useEffect, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
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
  // console.log('contacts', contacts)
  // console.log('groupContacts', groupContacts)
  // const [contacts, setContacts] = useState<ContactDto[]>([])
  // const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  // useEffect(() => {
  //   const findGroup = groupContacts.find(({ id }) => id === groupId)
  //   setGroupContacts(findGroup)
  //   setContacts(() => {
  //     if (findGroup) {
  //       return contactsState.filter(({ id }) =>
  //         findGroup.contactIds.includes(id)
  //       )
  //     }
  //     return []
  //   })
  //    }, [groupId])

  ////////////////////////////
  const findGroup = groupContacts.find(
    (groupContact) => groupContact.id === groupId
  )
  // console.log('findGroup', findGroup)

  if (findGroup) {
    dispatch(filtredContactByGroupAction(findGroup))
  }

  // console.log('groupContacts', groupContacts)

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
