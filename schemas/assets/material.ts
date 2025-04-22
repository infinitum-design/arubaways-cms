import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'material',
  title: 'Material',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Material Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'category',
      title: 'Material Category',
      type: 'reference',
      to: [{ type: 'materialCategory' }]
    },
    {
      name: 'unit',
      title: 'Unit of Measure',
      type: 'string'
    },
    {
      name: 'costPerUnit',
      title: 'Cost per Unit',
      type: 'number'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'unit'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Material',
        subtitle: `Unit: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
