import { Rule } from 'sanity'

export default {
  name: 'inspection',
  title: 'Inspection Log',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
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
      name: 'inspectedBy',
      title: 'Inspected By',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Inspection Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'result',
      title: 'Result',
      type: 'string',
      options: {
        list: ['Passed', 'Failed', 'Pending'],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    },
    {
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [{ type: 'file' }]
    }
  ]
}
