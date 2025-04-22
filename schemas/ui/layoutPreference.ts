import { Rule } from 'sanity'

export default {
  name: 'layoutPreference',
  title: 'Layout Preference',
  type: 'document',
  fields: [
    {
      name: 'appliesTo',
      title: 'Applies To',
      type: 'string',
      options: {
        list: ['Admin', 'Office', 'Crew', 'Custom User'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'user',
      title: 'Specific User (Optional)',
      type: 'reference',
      to: [{ type: 'user' }],
      description: 'If set, this layout applies only to this user'
    },
    {
      name: 'preferredTheme',
      title: 'Theme',
      type: 'string',
      options: {
        list: ['Light', 'Dark', 'Auto']
      },
      initialValue: 'Auto'
    },
    {
      name: 'dashboardView',
      title: 'Dashboard Style',
      type: 'string',
      options: {
        list: ['Tabs', 'Timeline', 'Accordion'],
        layout: 'dropdown'
      },
      initialValue: 'Tabs'
    },
    {
      name: 'defaultLandingPage',
      title: 'Default Landing Page',
      type: 'string',
      options: {
        list: ['Dashboard', 'Projects', 'Logs', 'Payroll', 'Tools']
      }
    },
    {
      name: 'sidebarCollapsed',
      title: 'Collapse Sidebar by Default?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'customSettings',
      title: 'Custom Settings (JSON)',
      type: 'text',
      description: 'Advanced overrides in JSON format (for developers)'
    },
    {
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
