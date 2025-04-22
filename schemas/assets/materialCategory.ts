import { Rule } from 'sanity'

export default {
  name: 'materialCategory',
  title: 'Material Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'defaultUnit',
      title: 'Default Unit',
      type: 'string',
      options: {
        list: ['pcs', 'm', 'kg', 'liters', 'boxes', 'rolls'],
        layout: 'dropdown'
      }
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
