import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'inspection',
  title: 'Inspection Log',
  type: 'document',
  fields: [
    {
      name: 'log',
      title: 'Related Log',
      type: 'reference',
      to: [{ type: 'log' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'type',
      title: 'Inspection Type',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    },
    {
      name: 'passed',
      title: 'Passed?',
      type: 'boolean'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'type',
      subtitle: 'passed'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: boolean }) {
      return {
        title: title ?? 'Inspection',
        subtitle: subtitle ? 'Passed' : 'Not Passed'
      }
    }
  }
}
