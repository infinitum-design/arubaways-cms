import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().email().error('A valid email address is required')
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: ['admin', 'office', 'field', 'finance'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'isActive',
      title: 'Active User',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title ?? 'Unnamed User',
        subtitle: `Role: ${subtitle ?? 'Unknown'}`
      }
    }
  }
}
