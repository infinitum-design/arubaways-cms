export default {
  name: 'invoice',
  title: 'Invoice',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Linked Quote',
      type: 'reference',
      to: [{ type: 'quote' }]
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit/Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'invoiceNumber',
      title: 'Invoice Number',
      type: 'string'
    },
    {
      name: 'dueDate',
      title: 'Due Date',
      type: 'datetime'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'Sent', 'Paid', 'Partial', 'Overdue']
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
