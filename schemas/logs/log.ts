export default {
  name: 'log',
  title: 'Daily Log Entry',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit/Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'loggedBy',
      title: 'Logged By',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'logDate',
      title: 'Log Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'workSummary',
      title: 'Work Summary',
      type: 'text'
    },
    {
      name: 'issuesEncountered',
      title: 'Issues Encountered',
      type: 'text'
    },
    {
      name: 'materialsUsed',
      title: 'Materials Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'material' }] }]
    },
    {
      name: 'crewPresent',
      title: 'Crew Present',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'user' }] }]
    }
  ]
}
