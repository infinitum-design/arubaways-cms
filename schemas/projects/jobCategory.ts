import { Rule } from 'sanity'

export default {
  name: 'jobCategory',
  title: 'Job Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Lighting Installation, Panel Upgrade, AC Wiring'
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'text'
    },
    {
      name: 'defaultChecklist',
      title: 'Linked Checklist (optional)',
      type: 'reference',
      to: [{ type: 'checklist' }],
      description: 'Auto-link this checklist when this job category is selected'
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
