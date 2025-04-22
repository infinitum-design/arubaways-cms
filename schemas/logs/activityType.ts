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
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Electrical Install, Troubleshooting, Inspection'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Electrical', 'Maintenance', 'Inspection', 'Repair', 'General'],
        layout: 'dropdown'
      }
    },
    {
      name: 'defaultDuration',
      title: 'Default Duration (hours)',
      type: 'number'
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    }
  ]
}
