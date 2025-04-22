import { Rule } from 'sanity'

export default {
  name: 'role',
  title: 'Role Permissions',
  type: 'document',
  fields: [
    {
      name: 'roleName',
      title: 'Role Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'permissions',
      title: 'Permissions',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'view_projects',
          'edit_projects',
          'manage_users',
          'view_finances',
          'submit_logs',
          'admin'
        ]
      }
    }
  ]
}
