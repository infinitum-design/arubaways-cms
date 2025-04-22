export default {
  name: 'permissions',
  title: 'Role Permissions',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'User Role',
      type: 'string',
      options: {
        list: ['Admin', 'Office', 'Crew']
      }
    },
    {
      name: 'canViewTabs',
      title: 'Tabs Visible to Role',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'canEditFields',
      title: 'Editable Fields',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
