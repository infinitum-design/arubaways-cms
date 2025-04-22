import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Supplier Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Supplier',
        subtitle: selection.subtitle ?? ''
      }
    }
  }
}
