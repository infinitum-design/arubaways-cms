import { Rule } from 'sanity'

export default {
  name: 'material',
  title: 'Material',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Material Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      title: 'Quantity Available',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: 'unit',
      title: 'Unit of Measurement',
      type: 'string',
      options: {
        list: ['pieces', 'meters', 'liters', 'kg'],
      },
    },
    {
      name: 'project',
      title: 'Assigned Project',
      type: 'reference',
      to: [{ type: 'project' }],
    },
  ],
}
