export default {
  name: 'permissions',
  title: 'Permissions Config',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'reference',
      to: [{ type: 'role' }]
    },
    {
      name: 'canEditProjects',
      title: 'Can Edit Projects?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'canViewLogs',
      title: 'Can View Logs?',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'role.name'
    },
    prepare({ title }: { title?: string }) {
      return { title: title ?? 'Role Permissions' }
    }
  }
}
