import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'taxRule',
  title: 'Tax Rule',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tax Rule Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'percentage',
      title: 'Tax Percentage',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(0).max(100).error('Enter a valid percentage')
    },
    {
      name: 'country',
      title: 'Country / Region',
      type: 'string'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'percentage'
    },
    prepare(selection: { title?: string; subtitle?: number }) {
      return {
        title: selection.title ?? 'Unnamed Tax Rule',
        subtitle: `Rate: ${selection.subtitle ?? 0}%`
      }
    }
  }
}
