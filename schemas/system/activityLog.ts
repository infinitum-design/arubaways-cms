export default {
  name: 'activityLog',
  title: 'System Activity Log',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User Who Did This',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'action',
      title: 'Action Taken',
      type: 'string'
    },
    {
      name: 'targetType',
      title: 'What Was Affected',
      type: 'string',
      options: {
        list: ['Quote', 'Invoice', 'Log', 'User', 'Tool', 'Payroll']
      }
    },
    {
      name: 'targetId',
      title: 'Affected Record ID',
      type: 'string'
    },
    {
      name: 'createdAt',
      title: 'Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
