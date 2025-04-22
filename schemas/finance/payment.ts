import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'invoice',
      title: 'Invoice',
      type: 'reference',
      to: [{ type: 'invoice' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'amount',
      title: 'Amount Paid',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(0).error('Amount must be a positive number')
    },
    {
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'method',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['Bank Transfer', 'Credit Card', 'Cash', 'Check'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'method',
      subtitle: 'paymentDate'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Payment',
        subtitle: `Date: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}