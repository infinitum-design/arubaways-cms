import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'currency',
  title: 'Currency',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Currency Code',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().length(3).error('Use standard 3-letter code (e.g. USD)')
    },
    {
      name: 'name',
      title: 'Currency Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'symbol',
      title: 'Currency Symbol',
      type: 'string'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'name'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Currency',
        subtitle: selection.subtitle ?? ''
      }
    }
  }
}
