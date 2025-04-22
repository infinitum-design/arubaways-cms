export default {
  name: 'discount',
  title: 'Discount',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'percent',
      title: 'Discount (%)',
      type: 'number'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    }
  ]
}
