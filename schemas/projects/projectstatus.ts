import { Rule } from 'sanity'

export default {
  name: 'projectstatus',
  title: 'project status',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'status Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'color',
      title: 'Status Color',
      type: 'string'
    }
  ]
}
