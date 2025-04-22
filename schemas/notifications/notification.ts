export default {
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    {
      name: 'recipient',
      title: 'Recipient',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'message',
      title: 'Notification Message',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Notification Type',
      type: 'string',
      options: {
        list: ['System', 'Reminder', 'Approval Request', 'Tool Alert']
      }
    },
    {
      name: 'method',
      title: 'Delivery Method',
      type: 'string',
      options: {
        list: ['In-App', 'WhatsApp', 'Email']
      },
      initialValue: 'In-App'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Sent', 'Failed']
      },
      initialValue: 'Pending'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'linkedLog',
      title: 'Related Log',
      type: 'reference',
      to: [{ type: 'log' }]
    },
    {
      name: 'linkedTool',
      title: 'Related Tool',
      type: 'reference',
      to: [{ type: 'tool' }]
    }
  ]
}
