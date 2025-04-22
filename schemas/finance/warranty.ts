import { Rule } from 'sanity'

export default {
  name: 'warranty',
  title: 'Warranty Record',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Linked Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'unit',
      title: 'Unit / Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'item',
      title: 'Covered Item',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Lighting Fixtures, Panel Install, etc.'
    },
    {
      name: 'startDate',
      title: 'Warranty Start Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'durationMonths',
      title: 'Duration (Months)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: 'terms',
      title: 'Terms & Conditions',
      type: 'text'
    },
    {
      name: 'createdAt',
      title: 'Registered At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
