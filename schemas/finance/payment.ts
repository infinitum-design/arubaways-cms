export default {
  name: 'payment',
  title: 'Payment Record',
  type: 'document',
  fields: [
    {
      name: 'invoice',
      title: 'Invoice',
      type: 'reference',
      to: [{ type: 'invoice' }]
    },
    {
      name: 'amount',
      title: 'Amount Paid',
      type: 'number'
    },
    {
      name: 'date',
      title: 'Date Paid',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'method',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['Cash', 'Bank Transfer', 'Credit Card']
      }
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    }
  ]
}
