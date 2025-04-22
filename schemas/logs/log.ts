import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'log',
  title: 'Daily Log',
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
      name: 'createdBy',
      title: 'Created By',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'logDate',
      title: 'Log Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'template',
      title: 'Template Used',
      type: 'reference',
      to: [{ type: 'logTemplate' }]
    },
    {
      name: 'content',
      title: 'Log Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'project.name',
      subtitle: 'logDate'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: `Log - ${title ?? 'Project'}`,
        subtitle: `Date: ${subtitle ?? 'N/A'}`
      }
    }
  }
}
