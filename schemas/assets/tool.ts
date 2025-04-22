import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Tool name is required')
    },
    {
      name: 'serialNumber',
      title: 'Serial Number',
      type: 'string'
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: ['New', 'Good', 'Needs Repair', 'Broken'],
        layout: 'dropdown'
      }
    },
    {
      name: 'supplier',
      title: 'Supplier',
      type: 'reference',
      to: [{ type: 'supplier' }]
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'serialNumber'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Tool',
        subtitle: `SN: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
