import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'assetCategory',
  title: 'Asset Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Title is required')
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
      title: 'title',
      subtitle: 'description'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Category',
        subtitle: selection.subtitle ?? ''
      }
    }
  }
}
