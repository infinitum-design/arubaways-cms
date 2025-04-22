import { Rule } from 'sanity'

export default {
  name: 'activityType',
  title: 'Activity Type',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: ['gray', 'blue', 'green', 'yellow', 'red'],
        layout: 'dropdown'
      }
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'color'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Activity',
        subtitle: `Color: ${subtitle ?? 'N/A'}`
      }
    }
  }
}
