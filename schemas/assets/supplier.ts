import { Rule } from 'sanity'

export default {
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Supplier Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
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
      name: 'notes',
      title: 'Additional Notes',
      type: 'text'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
