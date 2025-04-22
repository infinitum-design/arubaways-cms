export default {
  name: 'equipmentCondition',
  title: 'Equipment Condition Report',
  type: 'document',
  fields: [
    {
      name: 'tool',
      title: 'Tool',
      type: 'reference',
      to: [{ type: 'tool' }],
    },
    {
      name: 'reportedBy',
      title: 'Reported By (User)',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'date',
      title: 'Date Reported',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: ['Good', 'Needs Maintenance', 'Broken'],
      },
    },
    {
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
    },
  ],
}
