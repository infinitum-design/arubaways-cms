export default {
  name: 'payroll',
  title: 'Payroll Entry',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'Crew Member',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'periodStart',
      title: 'Start of Period',
      type: 'datetime'
    },
    {
      name: 'periodEnd',
      title: 'End of Period',
      type: 'datetime'
    },
    {
      name: 'daysWorked',
      title: 'Days Worked',
      type: 'number'
    },
    {
      name: 'dailyRate',
      title: 'Daily Rate',
      type: 'number',
      description: 'Will auto-fill from user but can be overridden'
    },
    {
      name: 'overtimePay',
      title: 'Overtime Pay',
      type: 'number'
    },
    {
      name: 'totalPay',
      title: 'Total Pay',
      type: 'number'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'Exported', 'Paid']
      },
      initialValue: 'Draft'
    },
    {
      name: 'generatedAt',
      title: 'Generated At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
