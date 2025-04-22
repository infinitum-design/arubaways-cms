import { Rule } from 'sanity'

export default {
  name: 'phase',
  title: 'Project Phase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Phase Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Rough-in Wiring, Inspection, Final Fix'
    },
    {
      name: 'project',
      title: 'Linked Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Planned Start Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'Planned End Date',
      type: 'datetime'
    },
    {
      name: 'actualStart',
      title: 'Actual Start Date',
      type: 'datetime'
    },
    {
      name: 'actualEnd',
      title: 'Actual End Date',
      type: 'datetime'
    },
    {
      name: 'status',
      title: 'Phase Status',
      type: 'string',
      options: {
        list: ['Not Started', 'In Progress', 'Completed', 'Delayed'],
        layout: 'dropdown'
      },
      initialValue: 'Not Started'
    },
    {
      name: 'assignedCrew',
      title: 'Assigned Crew',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'user' }] }],
      description: 'Who is working on this phase'
    },
    {
      name: 'checklists',
      title: 'Associated Checklists',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'checklist' }] }]
    },
    {
      name: 'notes',
      title: 'Phase Notes',
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
