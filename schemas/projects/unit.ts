export default {
  name: 'unit',
  title: 'Project Unit/Section',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Parent Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unitName',
      title: 'Unit Name or Number',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'supervisor',
      title: 'Supervisor Assigned',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Not Started', 'In Progress', 'Blocked', 'Completed']
      },
      initialValue: 'Not Started'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    }
  ]
}
