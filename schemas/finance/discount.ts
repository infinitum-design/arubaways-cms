import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'discount',
  title: 'Discount Rule',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Discount Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Label is required')
    },
    {
      name: 'percentage',
      title: 'Discount (%)',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(0).max(100).error('Percentage must be 0–100')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'percentage'
    },
    prepare(selection: { title?: string; subtitle?: number }) {
      return {
        title: selection.title ?? 'Unnamed Discount',
        subtitle: `Rate: ${selection.subtitle ?? 0}%`
      }
    }
  }
}
