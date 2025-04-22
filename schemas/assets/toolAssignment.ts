import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'toolAssignment',
  title: 'Tool Assignment',
  type: 'document',
  fields: [
    {
      name: 'tool',
      title: 'Tool',
      type: 'reference',
      to: [{ type: 'tool' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'assignedTo',
      title: 'Assigned To (User)',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'assignedDate',
      title: 'Assigned Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'returnDate',
      title: 'Return Date',
      type: 'date'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'tool.name',
      subtitle: 'assignedDate'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Tool Assignment',
        subtitle: `Date: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
