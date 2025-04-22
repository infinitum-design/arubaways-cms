import { Rule } from 'sanity'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'role',
      title: 'User Role',
      type: 'string',
      options: {
        list: ['Admin', 'Office', 'Crew'],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'dailyRate',
      title: 'Daily Rate (ƒ)',
      type: 'number',
      // ❌ Removed invalid `hidden` condition
      description: 'Only applies to crew members for payroll calculations',
    },
    {
      name: 'isActive',
      title: 'Active Account?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'joinDate',
      title: 'Join Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
