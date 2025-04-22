import { Rule } from 'sanity'

export default {
  name: 'menuConfig',
  title: 'Menu Configuration',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Menu Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Display name in the app (e.g. Dashboard, Tools, Payroll)'
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Frontend icon identifier (e.g. settings, folder, user)'
    },
    {
      name: 'slug',
      title: 'Slug (Key)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Programmatic key (e.g. dashboard, logs, payroll)'
    },
    {
      name: 'route',
      title: 'Navigation Route',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. /dashboard, /tools, /logs/project/:id'
    },
    {
      name: 'order',
      title: 'Order in Menu',
      type: 'number',
      description: 'Controls how high or low this appears in the sidebar'
    },
    {
      name: 'visibleToRoles',
      title: 'Visible To Roles',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      description: 'e.g. Admin, Office, Crew',
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: 'group',
      title: 'Menu Group',
      type: 'string',
      description: 'Optional grouping (e.g. Finance, Tools, Admin)'
    },
    {
      name: 'isActive',
      title: 'Show This Menu?',
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
