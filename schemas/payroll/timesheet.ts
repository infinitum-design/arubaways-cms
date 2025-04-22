import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'timesheet',
  title: 'Timesheet',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required().error('User is required')
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'hoursWorked',
      title: 'Hours Worked',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(0).max(24).error('Hours must be between 0 and 24')
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      user: 'user',
      subtitle: 'date'
    },
    prepare(selection: { user?: { name?: string }; subtitle?: string }) {
      return {
        title: selection.user?.name ?? 'Unnamed User',
        subtitle: `Date: ${selection.subtitle ?? 'No date'}`
      }
    }
  }
}
