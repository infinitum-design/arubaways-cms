import { Rule } from 'sanity'

export default {
  name: 'version',
  title: 'Version History',
  type: 'document',
  fields: [
    {
      name: 'targetType',
      title: 'Entity Type',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. quote, checklist, reportTemplate, payrollConfig'
    },
    {
      name: 'targetId',
      title: 'Linked Document ID',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'versionLabel',
      title: 'Version Label',
      type: 'string',
      description: 'e.g. v1.0, Updated Payment Terms, Initial Draft'
    },
    {
      name: 'changes',
      title: 'What Changed?',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional: summary of fields or notes changed'
    },
    {
      name: 'updatedBy',
      title: 'Updated By',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'notes',
      title: 'Version Notes',
      type: 'text'
    }
  ]
}
