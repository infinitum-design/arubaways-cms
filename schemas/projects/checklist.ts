import { Rule } from 'sanity'

export default {
  name: 'checklist',
  title: 'Checklist Template',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Checklist Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Pre-Wiring Inspection, Final Testing Checklist'
    },
    {
      name: 'category',
      title: 'Checklist Category',
      type: 'string',
      options: {
        list: ['Installation', 'Inspection', 'Safety', 'Commissioning', 'Other']
      }
    },
    {
      name: 'tasks',
      title: 'Checklist Tasks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Task Description', type: 'string' },
            {
              name: 'required',
              title: 'Is Required?',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ],
      validation: (Rule: Rule) => Rule.required().min(1),
      description: 'These tasks will be shown when this checklist is used.'
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
