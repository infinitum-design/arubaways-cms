import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'materialCategory',
  title: 'Material Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().error('Category name is required')
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
