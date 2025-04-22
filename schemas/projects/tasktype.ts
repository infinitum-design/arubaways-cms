import { Rule } from 'sanity'

export default {
  name: 'tasktype',
  title: 'task type',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'type Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
