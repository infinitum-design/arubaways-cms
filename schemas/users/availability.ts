import { Rule } from 'sanity'  // ✅ This line is crucial for validation to work

export default {
  name: 'availability',
  title: 'User Availability',
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Available', 'On Leave', 'Sick', 'Unavailable']
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'fromDate',
      title: 'From',
      type: 'datetime'
    },
    {
      name: 'toDate',
      title: 'To',
      type: 'datetime'
    }
  ]
}
