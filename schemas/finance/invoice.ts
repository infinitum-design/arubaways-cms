import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'invoice',
  title: 'Invoice',
  type: 'document',
  fields: [
    {
      name: 'invoiceNumber',
      title: 'Invoice Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Invoice number is required')
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required().error('Project is required')
    },
    {
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'amount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0).error('Amount must be a positive number')
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'Sent', 'Paid', 'Overdue'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'invoiceNumber',
      subtitle: 'status'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title ?? 'Untitled Invoice',
        subtitle: `Status: ${subtitle ?? 'None'}`
      }
    }
  }
}
