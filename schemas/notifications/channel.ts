import { Rule } from 'sanity'

export default {
  name: 'channel',
  title: 'Channel',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Channel Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Maintenance, Management, Electrical, Emergency'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'type',
      title: 'Channel Type',
      type: 'string',
      options: {
        list: ['Log', 'Notification', 'Report', 'Task'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
