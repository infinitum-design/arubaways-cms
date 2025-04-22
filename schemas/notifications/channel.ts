import { Rule } from 'sanity'

export default {
  name: 'channel',
  title: 'Notification Channel',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Channel Type',
      type: 'string',
      options: {
        list: ['Email', 'SMS', 'Push', 'Slack'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required().error('Channel type is required')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'type',
      subtitle: 'description'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Channel',
        subtitle: subtitle ?? ''
      }
    }
  }
}
