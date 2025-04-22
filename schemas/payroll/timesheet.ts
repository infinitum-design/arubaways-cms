import { Rule } from 'sanity'

export default {
  name: 'timesheet',
  title: 'Crew Timesheet',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'Crew Member',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit / Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'date',
      title: 'Work Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'hoursWorked',
      title: 'Hours Worked',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0).max(24)
    },
    {
      name: 'overtimeHours',
      title: 'Overtime Hours',
      type: 'number',
      initialValue: 0,
      validation: (Rule: Rule) => Rule.min(0).max(24)
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    },
    {
      name: 'verified',
      title: 'Verified by Admin',
      type: 'boolean',
      initialValue: false
    }
  ]
}
