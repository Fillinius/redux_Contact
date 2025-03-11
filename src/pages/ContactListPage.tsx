import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useGetContactQuery } from 'src/redux/contacts'
import { useGetGroupContactQuery } from 'src/redux/groupContacts'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = () => {
  const { data: contacts, isLoading: contactIsLoading } = useGetContactQuery()
  const { data: groupContacts, isLoading: groupContactsIsLoading } =
    useGetGroupContactQuery()

  const [findContacts, setFindContacts] = useState<
    Array<ContactDto> | undefined
  >(contacts)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let foundContacts: ContactDto[] | undefined = contacts
    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      foundContacts = foundContacts?.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      )
    }

    if (fv.groupId) {
      console.log('fv.groupId', fv.groupId)
      const foundGroupContacts = groupContacts?.find(
        ({ id }) => id === fv.groupId
      )

      if (foundGroupContacts) {
        foundContacts = foundContacts?.filter(({ id }) =>
          foundGroupContacts.contactIds.includes(id)
        )
      }
    }
    setFindContacts(foundContacts)
  }

  useEffect(() => {
    setFindContacts(contacts)
  }, [contacts])

  return (
    <>
      {(contactIsLoading || groupContactsIsLoading) && <p>Loaging...</p>}
      <Row xxl={1}>
        <Col className="mb-3">
          <FilterForm
            groupContactsList={groupContacts ?? []}
            initialValues={{}}
            onSubmit={onSubmit}
          />
        </Col>
        <Col>
          <Row xxl={4} className="g-4">
            {findContacts?.map((contact) => {
              return (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </>
  )
}
