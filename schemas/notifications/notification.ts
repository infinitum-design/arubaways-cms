import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Title is required')
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Message is required')
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Sent', 'Failed'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'recipient',
      title: 'Recipient',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'triggeredBy',
      title: 'Trigger Rule',
      type: 'reference',
      to: [{ type: 'triggerRule' }]
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Notification',
        subtitle: `Status: ${subtitle ?? 'N/A'}`
      }
    }
  }
}
