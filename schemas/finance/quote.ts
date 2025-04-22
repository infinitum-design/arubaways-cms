import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    {
      name: 'quoteNumber',
      title: 'Quote Number',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().error('Quote number is required')
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'amount',
      title: 'Quote Amount',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(0).error('Amount must be a positive number')
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'Sent', 'Accepted', 'Declined'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'quoteNumber',
      subtitle: 'status'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title ?? 'Untitled Quote',
        subtitle: `Status: ${selection.subtitle ?? 'N/A'}`
      }
    }
  }
}
