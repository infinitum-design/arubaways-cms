import { Rule } from 'sanity'

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Aruba Marriott Hotel, John Doe, Property Management Co.'
    },
    {
      name: 'contactPerson',
      title: 'Contact Person',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'clientType',
      title: 'Client Type',
      type: 'string',
      options: {
        list: ['Residential', 'Commercial', 'Government', 'Contractor', 'Other']
      }
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'text'
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
