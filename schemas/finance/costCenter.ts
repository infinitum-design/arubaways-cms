import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'costCenter',
  title: 'Cost Center',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Cost Center Code',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().error('Code is required')
    },
    {
      name: 'name',
      title: 'Cost Center Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
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
      title: 'name',
      subtitle: 'code'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Center',
        subtitle: `Code: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
