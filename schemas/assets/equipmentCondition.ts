import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'equipmentCondition',
  title: 'Equipment Condition',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Condition Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Label is required')
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
      subtitle: 'description'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Condition',
        subtitle: selection.subtitle ?? ''
      }
    }
  }
}
