import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import {
  filtredContactAction,
  filtredContactByGroupAction,
  findGroupByIdAction,
} from 'src/redux/actions'
import { useAppDispatch, useAppSelector } from 'src/redux/reducers/hooks'

export const ContactListPage = () => {
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)
  console.log(contacts)

  const groupContacts = useAppSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )

  const dispatch = useAppDispatch()

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      dispatch(filtredContactAction(fvName))
    }

    if (fv.groupId && !Array.isArray(groupContacts)) {
      // if (!Array.isArray(groupContacts)) return 'Err data'
      // const groupContact = groupContacts.find(({ id }) => id === fv.groupId)
      dispatch(findGroupByIdAction(fv.groupId))

      if (groupContacts && !Array.isArray(groupContacts)) {
        // findContacts = findContacts.filter(({ id }) =>
        //   groupContacts.contactIds.includes(id)
        // )

        // contacts.filter((contact) =>
        //   groupContacts.contactIds.includes(contact.id)
        // )
        dispatch(filtredContactByGroupAction(groupContacts))
      }
    }
  }
  if (!Array.isArray(groupContacts)) return <p>Err data</p>
  console.log(groupContacts)

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContacts}
          initialValues={{}}
          onSubmit={onSubmit}
        />
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
    </Row>
  )
}
