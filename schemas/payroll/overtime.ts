export default {
  name: 'overtime',
  title: 'Overtime Log',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'Crew Member',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'date',
      title: 'Date of Overtime',
      type: 'datetime'
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'number'
    },
    {
      name: 'rate',
      title: 'Hourly Rate',
      type: 'number'
    },
    {
      name: 'notes',
      title: 'Reason or Notes',
      type: 'text'
    },
    {
      name: 'project',
      title: 'Project (Optional)',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit (Optional)',
      type: 'reference',
      to: [{ type: 'unit' }]
    }
  ]
}
