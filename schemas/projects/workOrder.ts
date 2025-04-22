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
      validation: (Rule: Rule) => Rule.required().error('Title is required')
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'assignedTo',
      title: 'Assigned To',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'user' }] }]
    },
    {
      name: 'dueDate',
      title: 'Due Date',
      type: 'date'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Open', 'In Progress', 'Completed', 'Canceled'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Untitled Work Order',
        subtitle: `Status: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
