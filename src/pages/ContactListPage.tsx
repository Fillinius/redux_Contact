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
      dispatch(findGroupByIdAction(fv.groupId))

      if (groupContacts && !Array.isArray(groupContacts)) {
        dispatch(filtredContactByGroupAction(groupContacts))
      }
    }
  }
  if (!Array.isArray(groupContacts)) return <p>Err data</p>

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
