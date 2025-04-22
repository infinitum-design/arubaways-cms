export default {
  name: 'dashboard',
  title: 'Dashboard Config',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Card Label',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Data Type',
      type: 'string',
      options: {
        list: ['Quotes', 'Logs', 'Invoices', 'Crew Hours', 'Tool Alerts']
      }
    },
    {
      name: 'filter',
      title: 'Custom Filter',
      type: 'string',
      description: 'Optional query or tag to filter this card'
    },
    {
      name: 'visible',
      title: 'Visible on Dashboard',
      type: 'boolean',
      initialValue: true
    }
  ]
}
