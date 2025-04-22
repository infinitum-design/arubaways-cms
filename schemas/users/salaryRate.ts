import { Rule } from 'sanity'

export default {
  name: 'salaryRate',
  title: 'Salary Rate Record',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'rate',
      title: 'Daily Rate (ƒ)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive()
    },
    {
      name: 'effectiveDate',
      title: 'Effective Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
