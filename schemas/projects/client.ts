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
      validation: (Rule: Rule) => Rule.required().error('Client name is required')
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
      validation: (Rule: Rule) => Rule.email().error('Enter a valid email')
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Client',
        subtitle: selection.subtitle ?? ''
      }
    }
  }
}
