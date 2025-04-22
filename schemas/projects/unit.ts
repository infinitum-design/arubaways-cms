import { Rule } from 'sanity'

export default {
  name: 'unit',
  title: 'Project Unit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Unit Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Unit name is required')
    },
    {
      name: 'code',
      title: 'Unit Code',
      type: 'string'
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
      subtitle: 'code'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Unnamed Unit',
        subtitle: `Code: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
