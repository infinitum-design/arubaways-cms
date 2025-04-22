import { Rule } from 'sanity'

export default {
  name: 'logTemplate',
  title: 'Log Template',
  type: 'document',
  fields: [
    {
      name: 'templateName',
      title: 'Template Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Daily Site Log, Crew Maintenance Report'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'activityType',
      title: 'Related Activity Type',
      type: 'reference',
      to: [{ type: 'activityType' }]
    },
    {
      name: 'defaultFields',
      title: 'Default Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Field Label', type: 'string' },
            { name: 'type', title: 'Field Type', type: 'string', options: {
              list: ['string', 'text', 'number', 'boolean', 'date', 'file']
            }}
          ]
        }
      ],
      description: 'These fields will auto-populate when using this template.'
    },
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    }
  ]
}
