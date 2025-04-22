import { Rule } from 'sanity'

export default {
  name: 'phase',
  title: 'Project Phase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Phase Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Phase title is required')
    },
    {
      name: 'order',
      title: 'Phase Order',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(1).error('Order must be a positive number')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order'
    },
    prepare(selection: { title?: string; order?: number }) {
      return {
        title: selection.title ?? 'Unnamed Phase',
        subtitle: `Order: ${selection.order ?? 'N/A'}`
      }
    }
  }
}
