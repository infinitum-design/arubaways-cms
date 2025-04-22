import { Rule } from 'sanity'

export default {
  name: 'exportConfig',
  title: 'Export Configuration',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Config Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. Payroll Export, Tool Assignment Report, Crew Timesheets'
    },
    {
      name: 'type',
      title: 'Export Type',
      type: 'string',
      options: {
        list: ['Payroll', 'Log', 'Tool', 'Material', 'Quote', 'Invoice', 'Other'],
        layout: 'dropdown'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'fields',
      title: 'Fields to Include',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      description:
        'Field keys you want exported. Example: ["user.name", "project.title", "dailyRate", "hoursWorked"]'
    },
    {
      name: 'format',
      title: 'Export Format',
      type: 'string',
      options: {
        list: ['CSV', 'XLSX', 'PDF', 'JSON'],
        layout: 'dropdown'
      },
      initialValue: 'CSV'
    },
    {
      name: 'active',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'autoExport',
      title: 'Auto-export on Action?',
      type: 'boolean',
      description: 'e.g. export payroll every time it’s generated'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
