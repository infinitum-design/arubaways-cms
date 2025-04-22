export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'projectType',
      title: 'Type of Project',
      type: 'string',
      options: {
        list: ['Residential', 'Commercial', 'Industrial', 'Government']
      }
    },
    {
      name: 'location',
      title: 'Project Location',
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'End Date (Estimated or Final)',
      type: 'datetime'
    },
    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: ['Planned', 'In Progress', 'Paused', 'Completed']
      },
      initialValue: 'Planned'
    },
    {
      name: 'notes',
      title: 'Additional Notes',
      type: 'text'
    }
  ]
}
