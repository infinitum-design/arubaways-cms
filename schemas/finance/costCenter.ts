import { Rule } from 'sanity'

export default {
  name: 'costCenter',
  title: 'Cost Center',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Unique code for reference (e.g. CC-1001)',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'name',
      title: 'Cost Center Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'active',
      title: 'Active?',
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
