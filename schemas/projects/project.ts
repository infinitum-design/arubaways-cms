import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Project name is required')
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Planning', 'In Progress', 'Completed', 'On Hold'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'status'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title ?? 'Untitled',
        subtitle: `Status: ${subtitle ?? 'None'}`
      }
    }
  }
}
