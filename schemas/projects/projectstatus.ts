import { Rule } from 'sanity'

export default {
  name: 'projectstatus',
  title: 'Project Status',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Status Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Status label is required')
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
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title ?? 'No Label',
        subtitle: `Color: ${subtitle ?? 'N/A'}`
      }
    }
  }
}
