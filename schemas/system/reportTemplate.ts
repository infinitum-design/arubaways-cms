import { Rule } from 'sanity'

export default {
  name: 'reportTemplate',
  title: 'Report Template',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Template Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Daily Log Summary, Project Completion Report, Payroll Breakdown'
    },
    {
      name: 'reportType',
      title: 'Report Type',
      type: 'string',
      options: {
        list: ['Log', 'Project', 'Invoice', 'Payroll', 'Inspection', 'Custom']
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Internal Description',
      type: 'text'
    },
    {
      name: 'sections',
      title: 'Report Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'text',
              description:
                'You can use placeholders like {{project.name}}, {{user.name}}, {{totalHours}}'
            }
          ]
        }
      ],
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: 'footerNote',
      title: 'Footer Note',
      type: 'text'
    },
    {
      name: 'isDefault',
      title: 'Use as Default?',
      type: 'boolean',
      initialValue: false
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
