import { Rule } from 'sanity'

export default {
  name: 'workOrder',
  title: 'Work Order',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Work Order Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Install conduit in Unit 6, Fix panel at Hotel XYZ'
    },
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
      name: 'phase',
      title: 'Phase (if any)',
      type: 'reference',
      to: [{ type: 'phase' }]
    },
    {
      name: 'category',
      title: 'Job Category',
      type: 'reference',
      to: [{ type: 'jobCategory' }]
    },
    {
      name: 'assignedTo',
      title: 'Assigned Crew',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'user' }] }]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'In Progress', 'Completed', 'On Hold', 'Canceled']
      },
      initialValue: 'Pending'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'Work Description',
      type: 'text'
    },
    {
      name: 'checklist',
      title: 'Checklist Used',
      type: 'reference',
      to: [{ type: 'checklist' }]
    },
    {
      name: 'attachments',
      title: 'Files / Images',
      type: 'array',
      of: [{ type: 'file' }]
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
