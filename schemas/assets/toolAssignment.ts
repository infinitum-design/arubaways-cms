export default {
  name: 'toolAssignment',
  title: 'Tool Assignment',
  type: 'document',
  fields: [
    {
      name: 'tool',
      title: 'Tool',
      type: 'reference',
      to: [{ type: 'tool' }],
    },
    {
      name: 'assignedTo',
      title: 'Assigned To (User)',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'assignedDate',
      title: 'Date Assigned',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'returnDate',
      title: 'Expected Return Date',
      type: 'datetime',
    },
    {
      name: 'conditionNotes',
      title: 'Condition on Assignment',
      type: 'text',
    },
  ],
}
