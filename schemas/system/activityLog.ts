export default {
  name: 'activityLog',
  title: 'Activity Log',
  type: 'document',
  fields: [
    {
      name: 'action',
      title: 'Action',
      type: 'string'
    },
    {
      name: 'performedBy',
      title: 'Performed By',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'action',
      subtitle: 'timestamp'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Activity',
        subtitle: subtitle ?? ''
      }
    }
  }
}
