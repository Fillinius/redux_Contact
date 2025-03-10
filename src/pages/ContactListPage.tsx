import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useAppSelector } from 'src/redux/reducers/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = () => {
  const contacts = useAppSelector((state) => state.contacts.entitiesContacts)

  const groupContacts = useAppSelector(
    (state) => state.groupContacts.entitiesGroupContacts
  )

  const [findContacts, setFindContacts] = useState<Array<ContactDto>>(contacts)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let foundContacts: ContactDto[] = contacts
    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      foundContacts = foundContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      )
    }

    if (fv.groupId) {
      console.log('fv.groupId', fv.groupId)
      const foundGroupContacts = groupContacts.find(
        ({ id }) => id === fv.groupId
      )
      console.log(foundGroupContacts, 'group')

      if (foundGroupContacts) {
        foundContacts = foundContacts.filter(({ id }) =>
          foundGroupContacts.contactIds.includes(id)
        )
      }
    }
    setFindContacts(foundContacts)
  }

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
          {findContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
