import { Rule } from 'sanity'

export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'serial',
      title: 'Serial Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Available', 'In Use', 'Maintenance'],
      },
      initialValue: 'Available',
    },
    {
      name: 'photo',
      title: 'Tool Photo',
      type: 'image',
    },
    {
      name: 'conditionNotes',
      title: 'Condition Notes',
      type: 'text',
    },
  ],
}
