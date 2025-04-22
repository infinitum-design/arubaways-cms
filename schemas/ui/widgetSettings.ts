import { Rule } from 'sanity'

export default {
  name: 'widgetSettings',
  title: 'Dashboard Widget Settings',
  type: 'document',
  fields: [
    {
      name: 'widgetName',
      title: 'Widget Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Internal name (e.g. Recent Logs, Payroll Summary, Project Chart)'
    },
    {
      name: 'label',
      title: 'Display Label',
      type: 'string',
      description: 'What users see as the widget title'
    },
    {
      name: 'enabled',
      title: 'Enabled by Default?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'rolesVisibleTo',
      title: 'Visible To Roles',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.required().min(1),
      description: 'e.g. Admin, Office, Crew'
    },
    {
      name: 'widgetType',
      title: 'Widget Type',
      type: 'string',
      options: {
        list: ['list', 'chart', 'calendar', 'kpi', 'summary', 'custom']
      },
      initialValue: 'summary'
    },
    {
      name: 'dataSource',
      title: 'Data Source',
      type: 'string',
      description: 'e.g. logs, payroll, projects. Used in frontend logic.'
    },
    {
      name: 'settings',
      title: 'Custom Settings (JSON)',
      type: 'text',
      description: 'Optional advanced settings, stored as JSON'
    },
    {
      name: 'order',
      title: 'Order on Dashboard',
      type: 'number'
    },
    {
      name: 'isActive',
      title: 'Active Widget?',
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
