import { Rule } from 'sanity'

export default {
  name: 'triggerRule',
  title: 'Trigger Rule',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Rule Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'event',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          'On Project Completion',
          'On New Invoice',
          'On Payment Received',
          'On Task Assigned',
          'Custom Condition'
        ],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'targetRole',
      title: 'Target Role',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'event'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Trigger Rule',
        subtitle: subtitle ?? '—'
      }
    }
  }
}
