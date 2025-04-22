import { Rule } from 'sanity'

export default {
  name: 'checklist',
  title: 'Checklist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Checklist Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Title is required')
    },
    {
      name: 'items',
      title: 'Checklist Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          fields: [
            {
              name: 'text',
              title: 'Item Text',
              type: 'string',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'isRequired',
              title: 'Is Required?',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ],
      validation: (Rule: Rule) =>
        Rule.required().error('At least one item is required')
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection: { title?: string }) {
      return {
        title: selection.title ?? 'Untitled Checklist'
      }
    }
  }
}
