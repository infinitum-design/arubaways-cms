import { Rule } from 'sanity'

export default {
  name: 'payrollConfig',
  title: 'Payroll Settings',
  type: 'document',
  fields: [
    {
      name: 'payFrequency',
      title: 'Pay Frequency',
      type: 'string',
      options: {
        list: ['Weekly', 'Biweekly', 'Monthly']
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'workHoursPerDay',
      title: 'Standard Work Hours / Day',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1).max(24),
      initialValue: 8
    },
    {
      name: 'overtimeMultiplier',
      title: 'Overtime Rate Multiplier',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1),
      description: 'e.g. 1.5 means 150% pay for overtime',
      initialValue: 1.5
    },
    {
      name: 'defaultCurrency',
      title: 'Default Currency',
      type: 'reference',
      to: [{ type: 'currency' }]
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
