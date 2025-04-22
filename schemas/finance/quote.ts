import { Rule } from 'sanity'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'unit',
      title: 'Unit/Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'items',
      title: 'Quote Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'quantity', title: 'Qty', type: 'number' },
            { name: 'unitPrice', title: 'Unit Price', type: 'number' },
            {
              name: 'total',
              title: 'Line Total',
              type: 'number',
              readOnly: true
            }
          ]
        }
      ]
    },
    {
      name: 'discount',
      title: 'Discount Applied',
      type: 'reference',
      to: [{ type: 'discount' }]
    },
    {
      name: 'totalAmount',
      title: 'Total Quote Amount',
      type: 'number'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'Sent', 'Approved', 'Rejected']
      },
      initialValue: 'Draft'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
