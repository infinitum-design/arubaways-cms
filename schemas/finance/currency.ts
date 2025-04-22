import { Rule } from 'sanity'

export default {
  name: 'currency',
  title: 'Currency',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Currency Code',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'ISO code (e.g. AWG, USD, EUR)'
    },
    {
      name: 'symbol',
      title: 'Currency Symbol',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. ƒ, $, €'
    },
    {
      name: 'name',
      title: 'Currency Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Aruban Florin, US Dollar'
    },
    {
      name: 'exchangeRate',
      title: 'Exchange Rate (to AWG)',
      type: 'number',
      description: 'Optional. Used for future multi-currency calculations.'
    },
    {
      name: 'default',
      title: 'Default Currency?',
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
