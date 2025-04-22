import { Rule } from 'sanity'

export default {
  name: 'logTemplate',
  title: 'Log Template',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Template Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Default Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }: { title?: string }) {
      return {
        title: title ?? 'Untitled Template'
      }
    }
  }
}
