import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'warranty',
  title: 'Warranty Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Warranty Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Title is required')
    },
    {
      name: 'duration',
      title: 'Duration (in months)',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(1).error('Duration must be at least 1 month')
    },
    {
      name: 'coverage',
      title: 'Coverage Description',
      type: 'text'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration'
    },
    prepare(selection: { title?: string; subtitle?: number }) {
      return {
        title: selection.title ?? 'Unnamed Warranty',
        subtitle: `Duration: ${selection.subtitle ?? 0} mo`
      }
    }
  }
}
