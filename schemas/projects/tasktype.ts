import { Rule } from 'sanity'

export default {
  name: 'tasktype',
  title: 'Task Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Task Type Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Task type name is required')
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
        title: title ?? 'Unnamed Task Type',
        subtitle: subtitle ?? ''
      }
    }
  }
}
