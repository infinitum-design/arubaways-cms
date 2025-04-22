import { Rule } from 'sanity'

export default {
  name: 'emailTemplate',
  title: 'Email Template',
  type: 'document',
  fields: [
    {
      name: 'templateName',
      title: 'Template Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Internal name for this template (e.g. Invoice Reminder, New Quote)'
    },
    {
      name: 'subject',
      title: 'Email Subject',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Can include variables like {{clientName}}, {{projectTitle}}'
    },
    {
      name: 'body',
      title: 'Email Body (HTML)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
      description:
        'Use simple HTML or variables like {{invoiceTotal}}, {{dueDate}}, {{companyName}}. Example: <p>Hello {{clientName}}, here is your quote...</p>'
    },
    {
      name: 'templateType',
      title: 'Type of Template',
      type: 'string',
      options: {
        list: ['Quote', 'Invoice', 'Reminder', 'Internal Alert', 'Custom']
      }
    },
    {
      name: 'isDefault',
      title: 'Use as Default?',
      type: 'boolean',
      initialValue: false
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
