import { Rule } from 'sanity'

export default {
  name: 'taxRule',
  title: 'Tax Rule',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tax Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Standard VAT, Exempt, Import Tax'
    },
    {
      name: 'percentage',
      title: 'Tax Percentage (%)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0).max(100),
      description: 'Set the tax rate like 6 or 12'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'default',
      title: 'Default Tax Rule?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    }
  ]
}
