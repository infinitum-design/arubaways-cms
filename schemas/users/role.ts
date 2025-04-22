import { Rule } from 'sanity'

export default {
  name: 'role',
  title: 'Role',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Role Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Role name is required')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title ?? 'Untitled Role',
        subtitle: subtitle ?? ''
      }
    }
  }
}
