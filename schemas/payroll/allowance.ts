import { Rule } from 'sanity'

export default {
  name: 'allowance',
  title: 'Allowance Entry',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'Crew Member',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'description',
      title: 'Allowance Description',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Travel Stipend, Extra Shift'
    },
    {
      name: 'amount',
      title: 'Amount (ƒ)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: 'dateGranted',
      title: 'Date Granted',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Approved', 'Paid'],
        layout: 'radio'
      },
      initialValue: 'Pending'
    }
  ]
}
