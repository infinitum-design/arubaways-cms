import { Rule } from 'sanity'

export default {
  name: 'customFields',
  title: 'Custom Fields',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Field Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'value',
      title: 'Field Value',
      type: 'string'
    },
    {
      name: 'user',
      title: 'Linked User',
      type: 'reference',
      to: [{ type: 'user' }]
    }
  ]
}
